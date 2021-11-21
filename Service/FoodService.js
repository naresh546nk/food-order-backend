import Food from "../models/Food.js";
import connection from '../db.config.js'

export const  getFood= async (req,res)=>{
    try{
       const foodList=await Food.findAll();

        res.json({
            message:"resquest sent to server successfully ...",
            result:foodList
        })
    }catch(error){
        res.json({
            message:"somthing went wrong....",
            error: error
        })
    }

}


export const  addFood= async (req,res)=>{
    const t=await connection.transaction();
    try{
        console.log(req.body)
        console.log("price :", req.body.price)
        console.log("availabe: ",req.body.available)
        const food= await Food.create({
            name:req.body.name,
            description: req.body.description,
            price: req.body.price,
            available: req.body.available
    
        },{transaction: t})
        t.commit()
        res.json({
            message:"added successfully..",
            result:food,
        })
    }catch(error) {
        t.rollback();
        res.json({
            message:"something went wrong ....",
            error:error
        })

    }
}