import { Hono } from 'hono'
import mainRouter from './routes'
import { errorHandler } from './middlewares/errorHandler';
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const app = new Hono()



const prisma = new PrismaClient({
  datasourceUrl: env.DATABASE_URL,
}).$extends(withAccelerate())

app.use('*', errorHandler);

app.get('/', (c) => {
  return c.json('Hello Hono!')
})

app.route('/api/v1',mainRouter )

export default app
