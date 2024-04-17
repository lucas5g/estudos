import fastify from 'fastify'

const app = fastify()

app.get('/', () => {
  const test = 'lucas'
  return {message: 'bom dia'}
})

app.post('/users', (request, reply) => {

  return {message: 'User created'}

})

const port = 3000
app.listen({
  port, 
}).then(() => console.log(`Server Run http://localhost:${port}`))