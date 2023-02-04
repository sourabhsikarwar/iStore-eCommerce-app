const express = require("express")
const { connectDB } = require("./config/dbConn")
const userRoute = require("./routes/users")

const PORT = 5000 || process.env.PORT
const app = express()
app.use(express.json())

app.use("/api/users", userRoute)

const startServer = () => {
    connectDB()
    app.listen(PORT, () => {
        console.log(`Backend server is running at http://localhost:${PORT}`)
    })
}

startServer()