import express from 'express'
import dotenv from 'dotenv'
import router from './Routes/main.router.js'
dotenv.config()

const app = express()
const port = process.env.PORT || 3000

// Udvider app i index.js så vi kan læse form body data
app.use(express.urlencoded({ extended: true }))

app.use(router)

app.listen(port, () => {
	console.log(`Server kører på http://localhost:${port}`);
})