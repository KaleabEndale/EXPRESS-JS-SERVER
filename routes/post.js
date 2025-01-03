const express = require('express');
const router = express.Router();



router.use(express.urlencoded({extended : true}))

let users = [
    {id:1, name:'kaleab'},
    {id:2, name:'abebe'},
    {id:3, name:'hermela'}
]

router.get('/',(req,res)=>{
     
    res.json(users)
});

router.get('/byId/:id',(req,res)=>{
    let i = parseInt(req.params.id)
    
        
    if(i<=users.length && i != NaN){
        res.json(users.filter((users)=> users.id === i))
        
    }
    else if(i>users.length){
       res.sendStatus(404)
    }
    else{
        res.send('<script>alert("id must be a number")</script>')
        
    }
    
})


router.get('/',(req,res)=>{
     
    res.json(users)
});



router.get('/new',(req,res)=>{
    res.render('new')
});




router.post('/',(req,res)=>{
    const isTrue = true;
    if(isTrue){
    const username = req.body.firstname;
     users.push({id:users.length+1,name: username});
     //res.redirect(`/post/byId/${users.length}`);
     res.redirect('/post')
    
    }else{
        
       res.render('new',{firstname:req.body.firstname})
    }
   
});






module.exports = router;