import student from "../models/model.js"
import mongoose from "mongoose";
import mongodb from "mongodb"
let { MongoClient } = mongodb

class Controller {
    static getAllDoc = async (req, res) => {
        res.render("form", { id: req.params.id });
    }
    static createDoc = async ({ render }, { redirect }) => {
        let { name, age, email } = res.body;
        let mod = new student({ name, age, email });
        mod.save()
           .then(d => render("index", { data: d }))
           .catch(error => res.send(`<h1 style="color: red">error: ${error}</h1>`));
    };
    static updateDoc = async ({ body, params }) => {
        let { name, age, email } = body
        let { id } = params
        await student.findByIdAndUpdate(id, body)
    }
    static editDoc = async ({body, params}, { render }) => 
    {
        let { id } = params
        let data = student.findById(id, body)
        render("Update", { findedData: data })
    }
    static deleteDoc = async ({ body, params }) => 
    {
        let { id } = params
        await student.findByIdAndDelete(id, body)
    } 
    static get createDoc() {
        return Controller.createDoc;
    }
    static set createDoc(value) {
        Controller.createDoc = value;
    }
}
export default Controller