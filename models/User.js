import connection from '../db.config.js';
import DataType from 'sequelize';


const User=connection.define("user",{
    id: {
        type:DataType.UUID,
        primaryKey:true
    },
    name:{
        type:DataType.STRING(40)
    },
    emailId:{
        type:DataType.STRING(50),
        allowNull:false,
        validate:{
            isEmail:true
        }

    },
    DOB:{
       type:DataType.STRING(12),
       allowNull:false
    },
    gender:{
        type: DataType.STRING(20),
        defaultValue:"MALE",
        validate:{
            isIn:[["MALE","FEMALE"]]
        },
    
        
    },
    country:{
        type:DataType.STRING(20),
        defaultValue:"India"
    }

})
export default User;