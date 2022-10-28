import express from 'express';
import cors from 'cors';
import { cMail } from './cMailer.js';
const app =  express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}))
const router = express.Router();

app.route("/")
.get((req,res)=>{
    res.send("Hello World");
})

app.post("/mail",(req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    console.log(name);
    console.log(email);
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
