import { describe, it } from 'vitest'
import axios from 'axios' 
import request from 'supertest'

// const api = axios.create({
//   baseURL:'http://localhost:3000'
// })

const api = 'http://localhost:9229'

describe('Api', () => {
  it('/ (GET)', async() => {
    const { body } = await request(api)
      .get('/')

    console.log(body)

  })
})