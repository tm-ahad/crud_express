
import student from "../models/model.js"

class Controller {
    static getAllDoc = async (req, { render, redirect }) => {
        let result = student.find()
        return result
    }
    static createDoc = async ({ body }, { render, redirect }) => {
        let mod = new student(body)
        mod.save(() => {})
           .then(() => console.log("database saved")) 
           .then(data => render({ data }))
           .catch(err => { throw err }) 
        redirect("/")    
    }
    static updateDoc = async ({ body, params }, { redirect }) => {
        let { id } = params
        render("update")
        student.findByIdAndUpdate(id, body)
               .then(() => console.log("data updated"))
               .catch(err => { throw err }) 
        redirect("/")
    }
    static editDoc = async (req, { render, redirect }) => 
    {
        render("update")
    }
    static deleteDoc = async ({ body, params }, { redirect }) => 
    {
        let { id } = params
        student.findByIdAndDelete(id, body)
               .then(() => console.log("data deleted"))
               .catch(err => { throw err })
        redirect("/")
    }
}
export default Controller