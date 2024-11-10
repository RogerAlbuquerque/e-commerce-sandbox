import express from 'express';

export class App{
    public app:express.Application 
    constructor(){
        this.app = express();
        this.config();
        this.corsConfig();
    }

    corsConfig(){
        this.app.use((req,res,next) =>{
            res.header('Access-Control-Allow-Origin', process.env.corsOriginURL);
            res.header('Access-Control-Allow-Methods', '*');
            res.header('Access-Control-Allow-Headers', '*');
            next();
        });
    }

    config(){
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
    }


    listen(port:number){
        this.app.listen(port,() => { console.log(`Server is running on port ${port}`)});
    }
}