const express = require('express');
const app = express();

app.set('view engine','ejs')



app.listen(4000)

app.get('/',(req,res)=>{
    res.render('index')
    
})






const userRouter2 = require('./routes/post')
app.use('/post', userRouter2)

