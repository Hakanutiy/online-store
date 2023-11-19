import Router from 'express'
import authController from "../controller/authController.js";
import {check} from "express-validator";
const router = new Router

router.post('/registration', [
    check('username', "Имя пользователя не может быть пустым").notEmpty(),
    check('password', "Пароль должен быть больше 6 символов ").isLength({min:6})
], authController.registration)
router.post('/login', authController.login)
router.get('/users', authController.users)


export default router