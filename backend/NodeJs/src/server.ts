import dotenv from 'dotenv';
import { App } from './app';

dotenv.config();
const app = new App;

app.listen(3000);


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


