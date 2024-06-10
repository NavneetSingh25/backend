
const userRepositories = require('../repositories/userRepositories');
const UserService = require('../services/userService');

async function createUser(req,res){
    console.log("controller created");
    console.log(req.body);

    const userService= new UserService(new userRepositories());
    console.log(userService);
    try {
        const response= await userService.registerUser(req.body);
        return res.json({
            Message:"Successfully created",
            Success: true,
            data:response,
            error:{}
        })
    } catch (error) {
        return res.status(error.statusCode).json({
            Success:false,
            Message:error.reason,
            data:{},
            error:error
        })
        
    }
};
module.exports={
    createUser
}
