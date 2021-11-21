import Express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const PORT=8081
const app=Express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))





app.listen(PORT,(error)=>{
    console.log("server is running ....")
    console.log("=============================================================")
})

