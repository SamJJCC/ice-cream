// import the express module
import express from 'express';
// create an instance of an express app
const app=express();
// define port number
const PORT=3000;

app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.sendFile(`${import.meta.dirname}/views/home.html`)
})

// define the route
app.get('/',(req,res)=>{
    res.send('Welcome to my ice cream shop');
});

// start the server on the designated port
app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
})