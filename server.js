const express=require('express');
const app=express();

const global = function(req,res,next){
        console.log('Globalware')
        next()
}
app.use(global);

const Local = function(req,res,next){
    console.log('localware')
    next()
}

app.get('/',(req,res)=>{
    res.send("<h1>Welocme to first page</h1> <br/> <h2>Go to mobile Brands <br/> (Sony,HTC,iphone,oneplus)</h2>");
    res.end()
})

app.get('/Sony',Local,(req,res)=>{
    res.send('hi i am Sony')
})

app.get('/HTC', (req,res)=>{
    res.send('hi i am HTC')
})

app.get('/iphone',Local,(req,res)=>{
    res.send('hi i am Iphone ')
})

app.get('/oneplus', (req,res)=>{
    res.send('hi i am Oneplus')
})

app.listen(2020,()=>{
    console.log(`server running`)})