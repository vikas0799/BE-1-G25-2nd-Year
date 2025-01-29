const express = require('express');
const app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/index', (req, res) => {   
res.render('index');
});

app.get('/piyush', (req, res) => {  
 //database or file data fetch kar liya h and store in data varrible
   //..................
   let data=["Apple","Banana","Cherry","Dates"];
   let name="Piyush makkar";
   let url=req.url;
   let student={
    name:"sahira",
    dist:"mohali",
    collge:"chitkara university"
   }
 res.render('piyush',{finalname:name,data:data,url,student});
  });

app.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
});
