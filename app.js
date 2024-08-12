const express=require('express');
const bodyParser=require('body-parser')

const app=express();

app.use(bodyParser.urlencoded({extended:false}))

const loginRoutes=require('./routes/login')
const chatRoutes=require('./routes/chat')

app.use(loginRoutes)
app.use(chatRoutes)



app.listen(3001)