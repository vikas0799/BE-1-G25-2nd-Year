const express = require('express');

const app = express();
const port = 4000;

// http://localhost:4000/payment

app.use((req, res, next) => {
      //req valid or not
      //.........................
      console.log("universal middleware executed");
    next();
})
app.use('/payment', (req, res, next) => {
    //otp valid or not
    //.........................
    console.log("payment middleware executed");
    next();
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