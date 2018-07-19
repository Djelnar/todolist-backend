import Redis from 'redis'
import bluebirb from 'bluebird'
// eslint-disable-next-line no-magic-numbers


bluebirb.promisifyAll(Redis.RedisClient.prototype)
bluebirb.promisifyAll(Redis.Multi.prototype)


export const redis = Redis.createClient({
  host: 'localhost',
  port: 6379,
})
