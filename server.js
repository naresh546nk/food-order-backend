import connection from './db.config.js';
import Express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import Router from './Router/Router.js'


const PORT=8081
const app=Express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

connection.sync({alter:true }).then(()=>{
    console.log("database altred...")
}).catch((error)=>{
   console.log("error occoured...")
   console.log(error) 
})

const rout=Router(app)


app.listen(PORT,(error)=>{
    console.log("server is running ....")
    console.log("=============================================================")
})

