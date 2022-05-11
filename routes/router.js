import express from "express"
import Controller from "../controllers/controller"
let router = express.Router()

router.get("/", Controller.getAllDoc)
router.post("/", Controller.createDoc)
router.get("/edit/:id", Controller.editDoc)
router.post("/update/:id", Controller.updateDoc)
router.post("/delete/:id", Controller.deleteDoc)

export default router