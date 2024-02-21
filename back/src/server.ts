import express from 'express';
import dotenv from 'dotenv';


const app = express();
const port = 8000;

dotenv.config();

app.use((req,res,next) =>{
    res.header('Access-Control-Allow-Origin', process.env.corsOriginURL);
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
});

app.use(express.json());


/*ROUTES -----------------------------------
*
* Create products
*
*
* Create Categories
*
*
* Update product infos
*
*
* Show some number (like 10 or 20) of products
*
*
* Show/Search list of products filtered
*
*
* Show product by id/name
*
*
* Show list of products by id
*
*
* Show list of products by category
*
*
*
*
*
*
*
* CLIENTS""""""""""""""""""""""""""""""""""""""""""""""
*
* Create/Register Client
*
*
* Update client info
*
*
* Update Client infos*
*
*
*
*
*
*
* CLIENTS END """"""""""""""""""""""""""""""""""""""""""
*
* PURCHASE    """""""""""""""""""""""""""""""""""""""""
*
* Sell list of products if have in stock (products on cart)
*
*
*
*
*
*
*
*
*
* AUTENTICATION---------------------------------------------
*
*
*
*
*
*
*
*
*
*
*
* */



app.listen(port,() => { console.log(`Server is running on port ${8000}`)});
