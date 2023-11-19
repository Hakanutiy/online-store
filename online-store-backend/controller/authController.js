import Role from "../models/role.js";
import authServices from "../services/AuthServices.js";
import {validationResult} from "express-validator";

class authController{

    async registration(req, res){
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()){
                console.log('213213123')
                return res.status(400).json({message: "Ошибка при регистрации", errors})
            }
            const user = await authServices.registration(req.body)
            res.json(user);
        }
        catch (e) {
            console.log(e)
            res.status(400).json({message: 'Registration Error'})
        }
    }

    async login(req, res){
        try {
            const user = await authServices.login(req.body, res)
            res.json(user);
        }
        catch (e) {
            console.log(e)

        }
    }

    async users(req, res){
        try {
            const user = await authServices.users()
            res.json(user);
            console.log('WORK WORK WOPK')
        }
        catch (e) {
            console.log(e)
        }
    }
}

export default new authController()