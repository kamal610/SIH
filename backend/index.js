const express = require('express')
const mongodb = require('mongodb')
const MongoClient = require('mongodb').MongoClient
const cors = require('cors')
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const mongoConfig =
  'mongodb+srv://kamal610:kamal610@cluster0.dip82kt.mongodb.net/?retryWrites=true&w=majority';

var Sample;

MongoClient.connect(mongoConfig, function (err, succ) {
  if (err) throw err;
  console.log('database connected successfully');
  Sample = succ.db('SIH').collection('Register');
});

app.post('/register', (req, res)=>{
    const {name, email, password} = req.body
    Sample.findOne({email: email}, (err, user) => {
      if(user){
        res.send({message : "User already exists"})
      }
      else{
        Sample.insertOne(req.body).then((succ) => {
          res.send({message: "Registraion Successfull"})
      }).catch((err) => {
          res.send(err)
      });  
      }
    })
})
app.post('/login', (req, res)=>{
  const {email , password} = req.body
  Sample.findOne({email : email}, (err, user) =>{
    if(user){
      if(password === user.password){
        res.send({message: "login success", user : user})
      }
      else{
        res.send({message : "incorrect password"})
      }
    } else{
      res.send({message : "user not found"})
    }
  })
})

app.listen(2000, () => {
    console.log(`server running at 2000`);
});