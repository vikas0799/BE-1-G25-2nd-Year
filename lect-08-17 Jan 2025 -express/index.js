const express=require('express');

const app=express();


app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.get('/about',(req,res)=>{
    res.send('About Us');
});

// http://localhost:3000/profile/123/99
app.get('/profile/:commentID/:id/vikas',(req,res)=>{
    // console.log(req.params);
    const {commentID,id}=req.params;
    
    res.send(`Profile Page: '+${commentID}+' '+${id}`);
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});
