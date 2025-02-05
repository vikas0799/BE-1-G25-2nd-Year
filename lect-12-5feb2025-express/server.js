const express=require('express');
const app=express();

app.set('view engine','ejs');
// app.use(express.static('public'));
// app.use('/static',express.static('assests'));
// localhost:3000/static/images/dog.jpeg



// app.get('/',(req,res)=>{
//     res.send('Hello World');
// });


app.use(express.urlencoded({extended:true})); // for parsing application/x-www-form-urlencoded
app.use(express.json()); // for parsing application/json

app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/g25",(req,res)=>{
    console.log("get request on /g25 route");
    console.log(req.query);
    res.send("Hello G23 GET methods handled");
});

app.post("/g25",(req,res)=>{
    console.log("POSt request on /g25 route");
    console.log(req.body);
    res.send("Hello G23 POSt methods handled");
});


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});