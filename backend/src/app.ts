import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import userRoutes from './routes/users'


dotenv.config()
const app = express()


app.use(cors())
app.use(express.json())
app.use('/api', userRoutes)

app.get('/', (_req, res) => res.send('🎉 API funcionando!'))

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`🚀 Servidor no porto ${PORT}`))
