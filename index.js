const express = require("express");
const routes = require("./routes/routes.js")
const dbConnection = require("./config/config.js")

const app = express()
const PORT = 8080


app.use(express.json())

app.use("/", routes)

dbConnection();

app.listen(PORT, () => {
    console.log(`Server listen in http://localhost:${PORT}`)
})