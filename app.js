// app.js
import cors from 'cors'
import express from 'express'
import router from './src/routes/index.js'
import ApiError from './src/utils/ApiError.js'
import { swaggerServe, swaggerSetup } from './swagger.js'
const app = express()

// const allowedOrigins = [CLIENT_URL, LOCAL_URL, ADMIN_URL]

// const corsOptions = {
//     origin: allowedOrigins,
//     methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
//     credentials: true
// }
// app.use(
//     cors({
//         origin: function (origin, callback) {
//             // Allow requests with no origin, like mobile apps or curl requests
//             if (!origin || ALLOWED_ORIGINS.includes(origin) || 'http://localhost:3000') {
//                 callback(null, true)
//             } else {
//                 callback(new Error('Not allowed by CORS'))
//             }
//         },
//         methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], // Specify allowed HTTP methods
//         credentials: true // Allow sending cookies with cross-origin requests
//     })
// )

app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true
    })
  )

app.use(express.json({ limit: '300mb' }))
app.use(express.urlencoded({ extended: true, limit: '300mb' }))
app.use(express.static('public'))


app.use('/api/v1', router)
app.use('/api', swaggerServe, swaggerSetup)

app.all('*', (req, res, next) => {
    next(new ApiError('404', 'Page not found'))
})

app.use((err, req, res, next) => {
    const { status = 500, message = 'Something went wrong' } = err
    res.status(status).json({ error: message })
})

export { app }
