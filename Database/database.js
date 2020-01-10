const mongoose = require ('mongoose');


//Database name -> Practice
mongoose.connect('mongodb://localhost:27017/Facebook',{
    useNewUrlParser: true,
  //  useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify:false
})
