import express from 'express';
import mongoose from "mongoose";
import fileUpload from 'express-fileupload'
import router from "./router/router.js";
import cors  from 'cors'
import authRouter from "./router/authRouter.js";

const PORT = 3000
const DB_URL =`mongodb+srv://thehaknutiy:Hacklolqw12@cluster0.imbsujn.mongodb.net/?retryWrites=true&w=majority`

const app = express()

const corsOptions = {
    origin: "http://localhost:5173", // Разрешаем запросы только с этого адреса
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // Если используешь куки или JWT
};

app.use(cors());

// Обработка preflight-запросов
app.options('*', cors());
app.use(express.json())
app.use(express.static('static'))

app.use(fileUpload({}))
app.use(router)
app.use('/auth', authRouter)






async function startApp(){
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => console.log('listening on port' + PORT))
    }
    catch (e) {
        console.log(e)
    }
}

 await startApp()

export default app