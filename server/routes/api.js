const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');
const User = require('../models/user');
const ProductData=require('../models/Productdata');

router.get('/',(req,res) => {
    res.send("From Api");
});

function verifyToken(req,res,next){
    if(!req.headers.authorization){
        return res.status(401).send('unauthorized access req');
    }
    let token=req.headers.authorization.split(' ')[1];
    if(token ==='null'){
        return res.status(401).send('unauthorized access');
    }
    let payload=jwt.verify(token,'secretkey');
    if(!payload){
        return res.status(401).send('unauthorized');
    }
    req.userId=payload.subject;
    next();

}

router.get('/products',function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    ProductData.find()
    .then(function(products){
        res.send(products);
    });
});
router.post('/insert',verifyToken,function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
   console.log(req.body);
   var product={
       productId:req.body.product.productId,
       productName:req.body.product.productName,
       productCode:req.body.product.productCode,
       releaseDate:req.body.product.releaseDate,
       description:req.body.product.description,
       price:req.body.product.price,
       starRating:req.body.product.starRating,
       imageUrl:req.body.product.imageUrl
     
   }
   console.log(product);
    console.log(typeof product);
   var product=new ProductData(product);
   product.save((err,data)=>{
       if(err){
           console.log(err);
       }
       else{
           console.log(data);
       }
   });
});


router.post('/register',(req,res)=>{
    let userData=req.body;
    let user=new User(userData);
    console.log(userData);
    user.save((err,registeredUser)=>{
        if(err){
            console.log(err);
        }
        else{
            // res.status(200).send(registeredUser);
            let payload={subject:user._id};
            console.log(payload);
            let token=jwt.sign(payload,'secretkey');
            res.status(200).send({token});
        }
    })
})
router.post('/delete',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    console.log("deletion");
    console.log(req.body.item);
    ProductData.remove({_id:req.body.item},(err,user)=>{
        if(err){
            console.log(err);
            
        }
        else{
            console.log(user);
        }
})

})

router.post('/login',(req,res)=>{
    let userData = req.body;
    User.findOne({email:userData.email},(err,user)=>{
        if(err){
            console.log(err);
            
        }
        else{
            if(!user){
                res.status(401).send("Invalid Email");
            }
            else
            if(user.password !== userData.password){
                res.status(401).send("Invalid Password");
            }
            else{
                let payload={subject:user._id};
                let token=jwt.sign(payload,'secretkey');
                res.status(200).send({token});
            }
        }
    })
})
router.get('/edit/:id',function(req,res){

    ProductData.findById(req.params.id,(err,data)=>{
        if (!err) {return res.send(data)}
        else { console.log('Error in retireiving product details for updation')}
    });
 
 
 
 router.post('/update/:id',function(req,res){
     ProductData.findByIdAndUpdate(req.params.id,
         { $set: req.body },
                 (err,data)=>{
                     if (!err) { res.status(200).send(data);
                                 console.log('Product update successfull')}
                     else { console.log('Error in employee update' + err)}
                 })
    })
    })
module.exports = router;
