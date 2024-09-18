import { Hono } from 'hono'
import { cors } from 'hono/cors'
import mainRouter from './routes'
import { errorHandler } from './middlewares/errorHandler';







const app = new Hono<{
  Bindings: {
    DATABASE_URL: string
    JWT_SECRET: string
  }
  Variables: {
    userId: string
  }
}>()





app.use('/*', cors())

app.use('*', errorHandler);

app.get('/', (c) => {
  return c.json('Hello Hono!')
})

app.route('/api/v1',mainRouter )

export default app
