const express =require("express")
const mongoose  = require('mongoose')
const cors = require('cors')

const UserModel = require('./models/User.js');


const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://shivanibh921997:1234Shivani@travelusers.ssnlupm.mongodb.net/?retryWrites=true&w=majority&appName=travelusers");

app.post("/login", (req, res)=>{
    const {email, password} = req.body
    UserModel.findOne({
        email: email
    }).then(user =>{
        if(user){

        if(user.password === password){
            res.json("success")
        }else{
            res.json("password is incorrect")

        }}else{
            res.json("no record existed")

            

        }
    })


})

app.post("/register", (req, res)=>{
    UserModel.create(req.body)
    .then(employees=>res.json(employees))
    .catch(err => res.json(err))

})

app.listen(4000, ()=>{
    console.log("server is running")
})