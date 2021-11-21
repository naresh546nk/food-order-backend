import DataType from 'sequelize'
import connection from "../db.config.js";

const Food=connection.define('food', {
    id: {
        type: DataType.INTEGER,
        autoIncrement:true,
        primaryKey:true
	  },
	  name: {
		type: DataType.STRING(30),
		allowNull:false
	  },
	  description: {
          type: DataType.STRING(200),
          allowNull:false

      },
      price:{
          type: DataType.INTEGER,
          defaultValue:199.00
      },
      available:{
          type: DataType.INTEGER,
          defaultValue:5,
          allowNull:false
      }
	});
	
export default Food;