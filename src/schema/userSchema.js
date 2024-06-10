const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    firstName:{
        type:String,
        required:[true,"First Name is required"],
        minlength:[5,"First Name must be atleast 5 characters long"],
        lowercase:true,
        trim:true,
        maxlength:[20,"First Name must be less than less than or equal to 20 characters long"]
    },
    lastName:{
        type:String,
        required:[true,"First Name is required"],
        minlength:[5,"First Name must be atleast 5 characters long"],
        lowercase:true,
        trim:true,
        maxlength:[20,"First Name must be less than less than or equal to 20 characters long"]
    },
    mobileNumber:{
        type:String,
        trim:true,
        unique:[true,"mobile number should be unique"],
        required:[true,"mobile number should be provided"],
        maxlength:[10,"mobile number must be 10 characters long"],
        minlength:[10,"mobile number must be 10 characters long"]
    },
    email:{
        type:String,
        trim:true,
        unique:[true,"email should be unique"],
        required:[true,"email should be provided"],
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ , "please fill valid email"]
    },
    password:{
        type:String,
        required:[true,"password must be provided"],
        minlength:[6,"password must be 6 characters long"]
    }
    
},{
    timestamps:true
});

const User=mongoose.model("User",userSchema);
module.exports=User;