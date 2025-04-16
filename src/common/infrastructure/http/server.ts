import { app } from './app'
import { env } from '../env'
import { dataSource } from '../typeorm'

dataSource
  .initialize()
  .then(() => {
    app.listen(env.PORT, () => {
      console.log(`Server is running on port ${env.PORT}`)
      console.log('API docs available on http://localhost:3333/api-docs')
    })
  })
  .catch(error => {
    console.error('Error during Data Source initialization', error)
  })
