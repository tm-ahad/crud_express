import student from "../models/model.js"

class Controller {
    static getAllDoc = async (req, res) => {
        res.render("form");
    }
    static createDoc = async ({ render }, { redirect }) => {
        redirect("/student");
        let { name, age, email } = res.body;
        let mod = new student({ name, age, email });
        mod.save()
            .then(t => render("index", { data: t }))
            .catch(error => res.send(`<h1 style="color: red">error: ${error}</h1>`));
    };
    static updateDoc = async ({ body, params }) => {
        let { name, age, email } = body
        let { id } = params
        await student.findByIdAndUpdate(    id, body)
    }
    static editDoc = async ({body, params}) => 
    {
        let { id } = params
        let data = student.findById(id)
    } 
    static get createDoc() {
        return Controller.createDoc;
    }
    static set createDoc(value) {
        Controller.createDoc = value;
    }
}
export default Controller