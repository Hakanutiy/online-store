import User from "../models/user.js";
import bcrypt from 'bcryptjs'
import Role from "../models/role.js";
import jwt from "jsonwebtoken";
import config from "../config/config.js";


const generateAccessToken = (id, roles) => {
const payload = {
    id,
    roles
}
return jwt.sign(payload, config.secret, {expiresIn: '24h'})
}
class authServices{

    async registration(user){
        const candidate = await User.findOne({ username: user.username });

        if (candidate) {
            return { error: 'Пользователь с таким именем уже существует' };
        }
        let hashPassword = bcrypt.hashSync(user.password, 7)
        const userRole = await Role.findOne({value: "USER"})
        const registeredUser = await User.create({ username: user.username, password: hashPassword, roles: [userRole.value] });
        await registeredUser.save();
        return registeredUser;

    }

    async login(user, res){

        const login = await User.findOne({username: user.username});
        if (!login){
            return res.status(400).json({message: `Пользователь ${user.username} не найден`})
        }


        const isPasswordValid = await bcrypt.compare(user.password, login.password);

        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Неверный пароль' });
        }
        const token = generateAccessToken(login._id, login.roles)
        return {token: token, roles: login.roles}

    }


    async users(user){
        const users = await User.find()
        return users
    }
}

export default new authServices()