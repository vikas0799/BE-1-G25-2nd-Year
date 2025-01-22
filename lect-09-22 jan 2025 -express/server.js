const express=require('express');
const app=express();


app.get('/',(req,res)=>{
    res.send('Hello G25');
});

app.get('/search',(req,res)=>{
    console.log(req.query);

    const {name,age,college}=req.query;
    console.log(typeof(age));
    let fage=parseInt(age);
    console.log(typeof(fage));
    
    
    //data backend pe a gya h usko dataset se match krke result bhejna h
    //..................
    // if(name===undefined){
    //     res.send('Name is required');
    // }
    // else{
    //     res.send(`Searching something name=${name} age=${age}`);
    // }
    if(age<18){
        res.send('You are not allowed to enter');
    }
    else{
        res.send(`Welcome ${college}`);
    }
});


app.get('*',(req,res)=>{
    res.send('404 Page not found g25 only get method and any route');
});

app.all('*',(req,res)=>{
    res.send('404 Page not found g25 for any get/post any rout');
});
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});