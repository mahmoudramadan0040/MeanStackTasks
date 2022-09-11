import config from "./config/config";
import express,{Request,Response,NextFunction} from 'express';
import morgan from 'morgan';
import dbConnection from './Database/index';
import ErrMiddleware from "./middleware/err";
import routes from './routes/index';
const app = express();
const port = config.port || 3000;
// connection to mongodb server//
dbConnection();
///////////////////////////////
app.use(morgan('common'));
app.use(express.json());
app.get('/',(req:Request,res:Response,next:NextFunction)=> {
    res.send("hello world");
})
app.use("/api",routes);



// error handler middelware 
const err=  new ErrMiddleware();
app.use(err.error);
app.listen(port,()=>{
    console.log(`server start listing on port ${port}`);
})




