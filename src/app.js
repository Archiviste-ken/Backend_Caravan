import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json({limit: "16kb"}))   // for form data
app.use(express.urlencoded({ extended: true, limit: "16kb" })) // for URL data
app.use(express.static("public"))  // for static files data
app.use(cookieParser()) // for cookie data


export { app }