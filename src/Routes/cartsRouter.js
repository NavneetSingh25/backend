const express=require('express');
const cartsRouter=express.Router();

cartsRouter.get('/:id',getByCarts);

module.exports=cartsRouter;