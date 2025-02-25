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
    origin: ['http://example.com', 'http://localhost:5173'], // Укажите конкретные источники
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Разрешенные HTTP-методы
    allowedHeaders: ['Content-Type', 'Authorization'], // Разрешенные заголовки
    credentials: true, // Разрешить передачу куки и токенов
};

app.use(cors(corsOptions));

// Обработка preflight-запросов
app.options('*', cors(corsOptions));
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