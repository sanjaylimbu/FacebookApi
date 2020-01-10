const express = require ('express');
const Facebook=require('../Model/Facebook');
const auth=require('../Middleware/auth');
const router=new express.Router()


router.post("/signup", (req, res) => {
    var myData = new Facebook(req.body);
    myData.save();
});

router.post("/login", async function(req, res){     
    try{         
    const user = await Facebook.checkCrediantialsDb(req.body.email, req.body.password)         
    const token = await  user.generateAuthToken() 
    res.send({user,token});  
    }
    catch{
        res.send("please login");
    }    
})
module.exports=router