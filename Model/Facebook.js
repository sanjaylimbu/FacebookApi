const mongoose = require ('mongoose');
const jwt=require('jsonwebtoken');

const userSchema= new mongoose.Schema({
    firstname:{
        type: String
    },
    lastname:{
        type: String
    },
    phone:{
        type: String
    },
    gender:{
        type: String
    },
    date:{
        type: String
    },
    
    email:{
        type: String
    },
    password:{
        type: String
    },
   
    
tokens:[{           //here is token into token for multiple device login
    token:{
        type:String,
        require:true
    }
}]
})
userSchema.statics.checkCrediantialsDb = async (user22, pass) =>{    
      const user1 = await Facebook.findOne({email : user22, password : pass}) 
 
   return user1; 
 
}

userSchema.methods.generateAuthToken = async function () {   
      const user = this 
      const token = jwt.sign({ _id: user._id.toString() }, 'thisismynewcourse')      
      console.log(token);    
       user.tokens = user.tokens.concat({ token :token })   
         await user.save() 
 
    return token
 } 
 
 
const Facebook=mongoose.model('Facebook',userSchema)
//3 TYpes model core, inbiult, 
// create own model so need to export to require from other place
module.exports=Facebook  //donot forget to export