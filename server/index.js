const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/UserModel')

const app = express()
const PORT = process.env.PORT || 5001

app.use(cors())

// app.use(cors(
//     {
//         origin: [""],
//         methods: ["POST", "GET"],
//         credentials: true
//     }
// ))
    
app.use(express.json())
mongoose.connect("    ********your mongodb atlas uri here*******     ") //MONGODB URI HERE


app.post("/login", (req, res) => {
    const {email, password} = req.body
    UserModel.findOne({email: email})
        .then(user => {
            if(user) {
                if(user.password === password){
                    res.json("Success")
                }
                else{
                    res.json("Incorrect password")
                }
            }else{
                res.json("User not found")
            }
        })
})

// app.post('/register', (req, res) => {
//     UserModel.create(req.body)
//         .then(users => res.json(users))
//         .catch(err => res.json(err))
// })

app.post('/register', async (req, res) => {
    const { email } = req.body;

    try {
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }
        const newUser = await UserModel.create(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`server started on port 5001`)
})
