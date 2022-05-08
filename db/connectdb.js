import mongoose from "mongoose"

const connectdb = async (url = process.env.DATABASE_URL || "mongodb://localhost:27017") => 
{
    let options = {
        dbName: "CRUD_DB",
    }
    await mongoose.connect(url, options)
}
export default connectdb