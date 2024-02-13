import express from 'express';
import dotenv from 'dotenv';


const app = express();
const port = 8000;

dotenv.config();

app.use((req,res,next) =>{
    res.header('Access-Contro-Allow-Origin', process.env.corsOriginURL);
    res.header('Access-Contro-Allow-Methods', '*');
    res.header('Access-Contro-Allow-Headers', '*');
    next();
});

app.use(express.json());

app.listen(port,() => { console.log(`Server is running on port ${8000}`)});
