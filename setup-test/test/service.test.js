import { describe, it} from 'node:test'
import { parseUser } from '../src/service.js'
import assert from 'assert'

describe('Service', () => {
  it('should parse user', () => {

    const user = {
      email:'lucas@mail.com',
      name: 'erick',
      password: 'qweqwe'
    }

    const res = parseUser(user)

    assert.deepStrictEqual(res, {
      name: user.name.toUpperCase(),
      email: user.email
    })

  })
})