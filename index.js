const express =require('express');
const mongodb= require('mongodb');
const mongoose =require('mongoose');
const bodyPaerser=require('body-parser');
const user=require('./models/user');

// 
const db=mongodb.connect('mongodb://xuanloc:loc120297@ds037688.mlab.com:37688/app_project',{useNewUrlParser: true})
.then(result=>console.log('connect mongodb ...'))

const app =express();
app.use(express.json());
app.use(bodyPaerser.json());
app.post('/login',(req,res)=>{
    const u=new user({
        name:req.body.name
    })
    u.save()
        .then(data=>{
            res.json(data);
        })
        .catch(err=>res.json({message:err}));
    // .then(doc => {
    //     console.log(doc)
    //   })
    //   .catch(err => {
    //     console.error(err)
    //   })

})
app.listen(3000,()=>{
    console.log('server run port 3000');
})