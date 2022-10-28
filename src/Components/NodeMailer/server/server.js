import express from 'express';
import cors from 'cors';
import mongoose, { mongo } from "mongoose"
import { cMail } from './cMailer.js';
const app = express();
import JWT from "jsonwebtoken";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

mongoose.connect("mongodb+srv://harsh9539:Harsh9539@cluster0.egujj.mongodb.net/JWTDBTEST?retryWrites=true&w=majority").then((res) => console.log("DB connecton is successfull")).catch((err) => console.log(err));

app.route("/")
    .get((req, res) => {
        res.send("Hello World");
    })

app.post("/mail", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    console.log(name);
    console.log(email);
    res.json({ "Success": "GreatJob" })
    // try{
    // cMail(email,"Testing the NodeMailer is working fine or not",`Hey how are you ${name}. I am your friend from now`);
    // console.log("Email send successfully")
    // }
    // catch(err){
    //     console.log(err);
    // }
})

// JWT experiment

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
},
    { timestamps: true }
)

const User = mongoose.model("User", UserSchema);



app.post("/register", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const username = req.body.username;
    // console.log(req.body);
    const newUser = new User({
        email: email,
        username: username,
        password: password
    });
    try {
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (error) {
        res.status(500).json(error)
    }
    // res.send("success")
})

app.post("/login", async (req, res) => {
    const username = req.body.username;
    try {
        const user = await User.findOne({ username: username, password: req.body.password });
        const accessToken = JWT.sign({
            id: user._id,
            isAdmin: user.isAdmin
        },
            "MyLittleSecretForJWT",
            { expiresIn: "3d" }
        )
        const { password, ...others } = user._doc;
        console.log(others);
        res.status(200).json({ ...others, accessToken });
    } catch (error) {
        res.status(500).json(error);
    }
})

const verifyToken = (req,res,next)=>{
    const authHeader = req.headers.token;
    if(authHeader){
        const token = authHeader.split(" ")[1];
        JWT.verify(token,"MyLittleSecretForJWT",(err,user)=>{
            if(err) res.status(403).json("Your token is invalid");
            req.user = user;
            next();
        })
    }
    else{
        res.status(401).json("You are not authenticated");
    }
}

app.put("/id/:id",verifyToken,async (req, res) => {
    try {
            const updatedUser = await User.findOneAndUpdate(req.params.id, {
                // 1.->
                // one method for update is this write all params
                // username:req.body.username,
                // password:req.body.password
                // 2.->
                // secons method is to use mongoose agreegate function
                $set: req.body
            }, { new: true });
            res.status(200).json(updatedUser);

    } catch (err) {
        res.status(500).json(err);
    }
})




app.listen(8000, () => { console.log("Working successfully") })
