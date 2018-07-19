import { redis } from './redis'


const err = {
  results: null,
  error: 'User not found',
}

export const findUser = async ({ login, password }) => {
  const user = await redis.hgetAsync('users', login)

  if (!user || user.password !== password) return Promise.reject(err)

  return {
    results: user,
    error: null,
  }
}

