const express=require('express');
const app=express();


app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.get('/G25',(req,res)=>{
    res.render('index');
});
app.get('/cat',(req,res)=>{
    res.render('g25');
});



app.listen(3000,()=>{
    console.log('Server running on port 3000');
});