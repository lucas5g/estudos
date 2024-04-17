import fastify from 'fastify'
import { getDb } from './db.js'

const app = new fastify()
const isTestEnv = process.env.NODE_ENV === 'test'

const { dbClient, collections: { dbUsers } } = await getDb()

app.get('/customers', async (request, reply) => {
  const users = await dbUsers
    .find({})
    .project({ _id: 0 })
    .sort({ name: 1 })
    .toArray()

  return users
})

app.post('/customers', {
  schema:{
    body:{
      type: 'object',
      properties:{
        name: { type: 'string'},
        phone: { type: 'string'},
      }
    },
    response:{
      201:{
        type: 'string'
      }
    }
  }
}, async(request, reply) => {
  const user = request.body 
  await dbUsers.insertOne(user)
  return reply.code(201).send(`user ${user.name} created!`)
})

app.addHook('onClose', async() => {
  console.log('server closed!')
  return dbClient.close()
})

if(!isTestEnv){
  const serverInfo = await app.listen({
    port: process.env.PORT || 9999,
    host: '::'
  })

  console.log(`server is running at ${serverInfo}`)
}