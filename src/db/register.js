import { redis } from './redis'


export const register = ({ login, password }) => redis.hsetAsync('users', login, password)
