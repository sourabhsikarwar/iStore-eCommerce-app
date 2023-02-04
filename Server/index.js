const express = require("express")
const { connectDB } = require("./config/dbConn")
const userRoute = require("./routes/user")
const productRoute = require("./routes/product")
const authRoute = require("./routes/auth")

const PORT = 5000 || process.env.PORT
const app = express()
app.use(express.json())

app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/product", productRoute)

const startServer = () => {
    connectDB()
    app.listen(PORT, () => {
        console.log(`Backend server is running at http://localhost:${PORT}`)
    })
}

startServer()