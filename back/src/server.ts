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
* Sell list of products if have in stock (products in cart)
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
