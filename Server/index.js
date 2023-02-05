const express = require("express")
const cors = require("cors")
const { connectDB } = require("./config/dbConn")
const userRoute = require("./routes/user")
const productRoute = require("./routes/product")
const authRoute = require("./routes/auth")
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")
const stripeRoute = require("./routes/stripe")

const PORT = 5000 || process.env.PORT

const app = express()
app.use(express.json())
app.use(cors())

app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/product", productRoute)
app.use("/api/orders", orderRoute)
app.use("/api/carts", cartRoute)
app.use("/api/checkout", stripeRoute)

const startServer = () => {
    connectDB()
    app.listen(PORT, () => {
        console.log(`Backend server is running at http://localhost:${PORT}`)
    })
}

startServer()