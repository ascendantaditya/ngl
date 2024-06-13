import mongoose from "mongoose"

type ConnectionObject = {
    isConnected? : number
}

const connection: ConnectionObject = {}

//using async methdd here - because here db exist in different continent.

// here void refers to the db ki mujhe parwa nahi hain tum koi bhi data daalo toh
async function dbConnect(): Promise<void> {
    if (connection.isConnected) {
        console.log("Already Connected to database");
        return
    }
    
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || '', {})

        connection.isConnected = db.connections[0].readyState


        console.log("DB Connected Successfully");

    } catch (error) {

        console.log("Database connection failed", error)

        process.exit()

    }
}


export default dbConnect;