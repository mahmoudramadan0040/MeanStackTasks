import {Request, Response,NextFunction} from 'express';
import User from '../model/user.model';
import bcrypt from 'bcrypt';
import config from '../config/config';
import IUser from '../interfaces/User.interface';
import Jwt from 'jsonwebtoken'
class UserController {
    public async hashPassword(password:string):Promise<string>{
        console.log("hellow owle");
        const salt = parseInt(config.salt as string );
        console.log(salt);
        const hashSercret = bcrypt.hash(`${password}${config.pepper}`,salt);
        return hashSercret;
    }
    async auth (email:string,password:string):Promise<IUser|null>{
        try{
            const result = await User.findOne({"email":email});
            console.log(result);
            const checkPassword =  bcrypt.compareSync(`${password}${config.pepper}`,result?.password as string );
            if(checkPassword){
                return result as IUser;
            }
            return null;
        }catch(error){
            throw new Error("user can not be autherized");
        }
    }
     Register = async(req:Request, res: Response,next:NextFunction)=>{
        try{
            console.log(req.body.password);  
            // await this.hashPassword(req.body.password);
            req.body.password = await this.hashPassword(req.body.password as string )
            // console.log(result);
            // console.log(req.body.password);     
            const user = new User({...req.body});
            user.save((err)=>{
                next(err);
            });
            res.json({
                status:"sucess",
                data:{user},
                "message":"user created successfully ! "
            })
        }catch(err){
            next(err)
        }
    }
    Login = async(req:Request, res: Response,next:NextFunction)=>{
        try{ 
            const {email,password}= req.body;
            const user_auth = await this.auth(email,password);
            console.log(user_auth);
            const token =Jwt.sign({user_auth},config.token as string );
            if(user_auth){
                return res.json({ 
                    status:"success",
                    data:{user_auth,token}
                })
            }else{
                return res.status(401).json({
                    status:"error faild login",
                    message:"the user and password incorrect please try again "
                })
            }
        }catch(err){
            return next(err);
        }
    }
}
export default UserController;
