import {Router} from 'express';
import UserController from "../Controller/user.controller";

const user = new UserController();
const routes = Router();

routes.post("/register",user.Register);
routes.post("/auth",user.Login);

export default routes;