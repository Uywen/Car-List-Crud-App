import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
const app = express()

// port number
const Port = 8080

// importing car routes from cars.js in route file
import carRoutes from "./route/cars.js"

// middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())

app.use('/', carRoutes)

app.get("/", (req, res) => res.send("Hello World"))

// if the url entered is wrong this error will appear
app.all('*', (req, res) => res.send("This URL does not exist"))

app.listen(Port, () => console.log(`Server is listening on port ${Port}`))