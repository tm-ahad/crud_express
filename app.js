//const express = require('express') 
import express from 'express'
import connectdb from "./db/connectdb.js"
import Controller from './controllers/controller.js'
import { join } from 'path'
import router from './routes/router.js'

const app = express()
const port = process.env.PORT || '3000'
app.set("view engine", "ejs")
connectdb("mongodb://localhost:27017/CRUD_DB")
         .then(() => console.log("database connedted!"))
         .catch(err => console.log(err.message))

app.use(express.static(join(process.cwd(), "public")))
app.use("/student", router)     

app.get("/", router)    
app.listen(port, () => { 
    console.log(`Server listening at http://localhost:${port}`)
})