class userService{

    constructor(_userRepositories){
        this.userRepositories=_userRepositories;
    }

    async registerUser(userDetails){
        console.log("hitting service layer");
        const user= await this.userRepositories.findUser({
            email:userDetails.email,
            mobileNumber:userDetails.mobileNumber
        });

        if(user){
            throw{reason:'user already exits', statusCode:400};
        }

        const newUser=await this.userRepositories.createUser({
            email:userDetails.email,
            mobileNumber:userDetails.mobileNumber,
            firstName:userDetails.firstName,
            lastName:userDetails.lastName,
            password:userDetails.password
        });
        if(!newUser){
            throw{reason:'something went wrong',statusCode:500};
        }
        return newUser;


    }

}
module.exports=userService;