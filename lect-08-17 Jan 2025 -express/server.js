const express=require('express');

const app=express();

// Middleware to log request details
app.use((req, res, next) => {
    console.log(`${req.method} request for ${req.url}`);
    console.log(`Request IP: ${req.ip}`);
    next(); // Pass control to the next middleware
});

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.get('/about',(req,res)=>{
    res.send('About Us');
});



app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});
