const express=require('express');
const serverConfig=require('./config/serverconfig')
//const bodyParser=require('body-parser')
const connectDB=require('./config/DBconfig');


const app=express();

app.use(express.json());//deserializers
app.use(express.text());
app.use(express.urlencoded({extended:true}));

app.post('/ping',(req,res)=>{
  console.log(req.body);
  return res.json({message:"pong"});
})

 app.listen(serverConfig.PORT,async ()=>{
   await connectDB();
   console.log(`server got started at ${serverConfig.PORT}...`);
})


//PZ3pSI3TwGs4NAAB
//navneetsingh9234