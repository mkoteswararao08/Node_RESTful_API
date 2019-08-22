const express=require('express');
const app=express();
var curd=require('./crud_operations');
const bodyParser=require('body-parser');
const cors=require('cors');
app.use(cors());

const port= process.env.PORT || 3000 ;

app.use(express.static('D:/Visual_Studio_Code/NodeJs/Node_RESTful_API/angular-Node-BaseApp'))
app.use(bodyParser.urlencoded({extended:false }));
app.use(bodyParser.json());


app.get('/',(req,res)=>{
    console.log("this is the way to get query parameters present in url:"+req.query.id);
    res.send('Hi Node RESTful_API');
})

app.post('/api/addUser',curd.add);

app.get('/api/user', curd.retrieve);

app.get('/api/user/:id', curd.Singleretrieve);

app.delete('/api/delete/:id', curd.delete);

app.put('/api/update/:id',curd.update);

app.listen(port,()=>{console.log(`Example app listening on port ${port}!`)});

