import express from "express"
import Controller from "../controllers/controller"
let router = express.Router()
router.get("/", Controller.getAllDoc)
export default router