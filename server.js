const express = require('express');
const app = express();

app.set('view engine','ejs')



app.listen(3000)

app.get('/',(req,res)=>{
    res.render('index')
    
})



const userRouter = require('./routes/users')
app.use('/users', userRouter)

const userRouter2 = require('./routes/post')
app.use('/post', userRouter2)




