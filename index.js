const express = require("express")
const app = express()
const Port = 8000

app.listen(Port, () => {
console.log("Sever is listening on http://localhost:"+Port)
})