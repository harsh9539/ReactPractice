import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { cMail } from './cMailer.js';
const app =  express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))
const router = express.Router();

app.route("/")
.get((req,res)=>{
    res.send("Hello World");
})

app.post("/mail",(req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    console.log(req.body.name);
    console.log(req.body.email);
    res.json({"Success":"GreatJob"})
    try{
    cMail(email,"Testing the NodeMailer is working fine or not",`Hey how are you ${name}. I am your friend from now`);
    console.log("Email send successfully")
    }
    catch(err){
        console.log(err);
    }
})

app.listen(8000,()=>{console.log("Working successfully")})
