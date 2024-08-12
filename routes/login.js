const express=require('express')

const router=express.Router();

router.get('/login',(req,res,next)=>{
    res.send(`<form action="/" onSubmit="localStorage.setItem('username',document.getElementById('username').value)"  method="POST" >
        <input id="username" type="text" placeholder="username" name="username">
        <button type="submit">Login</button>
        </form>`)
})


module.exports=router