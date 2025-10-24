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

// routes import

import userRouter from "./routes/user.routes.js"


// routes declaration

app.use("/api/v1/users",userRouter)

// http:localhost:8000/api/v1/users/register 
export { app }