import student from "../models/model.js"

class Controller {
    static getAllDoc = async (req, res) => {
        let result = student.find()
        console.log(result)
        res.render("form", { result });
    }
    static createDoc = async ({ render, send }, { body }, next) => {
        let [ nameI, ageI, emailI ] = document.getElementByTagName("input")
        let name = nameI.value
        let age = ageI.value
        let email = emailI.value
        let mod = new student({ name, age, email })
        mod.save(() => {})
           .then(data => render("form", { data }))
           .catch(error => send(`<h1 style="color: red">error: ${error}</h1>`));
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
}
export default Controller