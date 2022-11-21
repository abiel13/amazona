import express, { json } from 'express'
import fetch from 'node-fetch';

let data
fetch('https://fakestoreapi.com/products?limit=20').
then(res => res.json()).
then(json => {
     data = json;
} )



const app = new express();
app.get('/api/products',(req,res) =>{
    res.send(data);
    // console.log(data) a
})

app.get('/api/products/slug:slug',(req,res) =>{
    const product = data.find((x) => x.title === req.params.title);
 console.log(product)   
  if(product){      
        res.send(product)
    }
    else{
        res.status(404).res.send({message:'page not found'})
    }
})

const port = process.env.PORT || 5000

app.listen(port,() =>{
    console.log(`app is ready at http://localhost:${port}`)
})