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
        res.send('<script>alert("id must be a number")</script>'+ "id must be a number")  
    }   
})


router.post('/',(req,res)=>{
       const newPost = {
        id: users.length+1,
        name:req.body.name
       }
       if(newPost.name == ""){
        res.status(404).json({message: "include a name"})
       }else{
       users.push(newPost)
    res.json(users)}
})


router.put('/:id',(req,res)=>{
const id = parseInt(req.params.id)
const post = users.find((users)=>users.id === id)
if(id<=users.length && id != NaN){
    post.name = req.body.name
    res.json(users) 
}
else if(id>users.length){
   res.sendStatus(404)
}
else{
    res.status(404).json({message:"id must be a number"})  
}   
})


router.delete('/:id',(req,res)=>{
    const id = parseInt(req.params.id)
    const post = users.find((users)=>users.id === id)
    if(id<=users.length && id != NaN){
        const targetIndex = users.indexOf(post)
        users.splice(targetIndex,1)
        res.json(users) 
    }
    else if(id>users.length){
       res.sendStatus(404)
    }
    else{
        res.status(404).json({message:"id must be a number"}) 
    }   
    })







module.exports = router;


