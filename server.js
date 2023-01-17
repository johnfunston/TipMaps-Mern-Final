import 'express-async-errors'
import express from 'express'

const app = express()
import dotenv from 'dotenv'
dotenv.config()

//db && authenticate
import connectDB from './db/connect.js'

//routers
import authRouter from './routes/authRoutes.js'
import shiftsRouter from './routes/shiftsRoutes.js'

//Middleware

import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMIddleware from './middleware/error-handler.js';
app.use(express.json())

app.get('/api/v1', (req, res) => {
    res.json ({ msg: 'API'})
})

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/shifts', shiftsRouter)
app.use(notFoundMiddleware)
app.use(errorHandlerMIddleware)


const port = process.env.PORT || 5000

 const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`)
        })
    } catch (error) {
        console.log(error)
    }
 }



 start()