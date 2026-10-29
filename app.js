// import the express module
import express from 'express';
// create an instance of an express app
const app=express();
// define port number
const PORT=3001;

const orders=[];
app.use(express.static('public'));

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.render('home')
})

app.get('/admin', (req, res) => {
    res.render('admin', {orders} );
});

app.post('/submit-order',(req,res)=>{
    // create a json object to store order data
    const order=req.body;
    order['timestamp']=new Date();
    console.log(order);

    // add order object to orders array
    orders.push(order);
    console.log(orders);
    res.render('confirm',{order});
});

// start the server on the designated port
app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
})