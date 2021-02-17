const mongoose=require('mongoose');

const CoursesSchema=mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        courseCode:Number,
        date:{
            type:Date,
            default:Date.now
        }
    }
);

module.exports=mongoose.model('courses',CoursesSchema);
// exports.courses=new courses=[
//     {id:1,name:'course1'},
//     {id:2,name:'course2'},
//     {id:3,name:'course3'},
//     {id:4,name:'course4'},
//     {id:5,name:'course5'}
// ];