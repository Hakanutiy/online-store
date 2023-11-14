import express from 'express';
import mongoose from "mongoose";
import fileUpload from 'express-fileupload'
import router from "./router.js";
import cors  from 'cors'

const PORT = 5000
const DB_URL =`mongodb+srv://thehaknutiy:Hacklolqw12@cluster0.imbsujn.mongodb.net/?retryWrites=true&w=majority`

const app = express()

const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json())
app.use(fileUpload({}))
app.use(router)






async function startApp(){
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => console.log('listening on port' + PORT))
    }
    catch (e) {
        console.log(e)
    }
}

startApp()