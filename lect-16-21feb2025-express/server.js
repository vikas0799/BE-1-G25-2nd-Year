const express = require('express');

const app = express();
const port = 4000;

// http://localhost:4000/payment

const verifyotp=(req, res, next)=>{
    if(req.query.otp==="5678"){
        next();
    }
    else{
        res.send("invalid otp")
    }
}

const verifyuser=(req, res, next)=>{
    if(req.query.username==="vikas0799" && req.query.password==1234){
        console.log("valid user");
        next();
    }
    else{
        res.send("invalid user")
    }
}

app.use((req, res, next) => {
      //req valid or not
      //.........................
      console.log("universal middleware executed");
    next();
})

// localhost:4000/payment/?otp=5678&username=vikas0799&password=1234
app.use('/payment',verifyuser,verifyotp, (req, res, next) => {
    //otp valid or not
    //.........................
    console.log("payment middleware executed");
    next();
}, (req, res,next) => {
    console.log("third middleware executed");
    
});

app.get('/', (req, res) => {
    res.send('Hello G25 from Express.js');
});

app.get('/payment', (req, res) => {
    res.send('Payment page');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});