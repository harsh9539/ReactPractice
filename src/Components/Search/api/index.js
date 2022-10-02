import express from "express";
import cors from 'cors';
const app = express();
import { Users } from './users.js'

app.use(cors());


app.get("/", (req, res) => {
    const { query } = req.query;
    console.log(query);
    const keys = ["first_name", "last_name", "email"]
    const search = (data) => {
        return data.filter(
            (item) =>
                keys.some(key => item[key].toLowerCase().includes(query))
        )
    }
    res.json(search(Users).splice(0, 10));
})

app.listen(5000, () => console.log("Api is working"));
