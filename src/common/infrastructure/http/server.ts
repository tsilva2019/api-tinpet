import { app } from './app'
import { env } from '../env'
const port = 3333

app.listen(env.PORT, () => {
  console.log(`Server is running on port ${env.PORT}`)
  console.log('API docs available on http://localhost:3333/api-docs')
})
