import {getFood ,addFood} from '../Service/FoodService.js'

const Router=(app)=>{
    app.get("/getFood", getFood)
    app.post("/addFood", addFood)
}


export default Router;