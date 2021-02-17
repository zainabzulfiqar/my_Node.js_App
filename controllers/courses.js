//const courses=require('../models/courses');
const courses=require('../models/courses');
exports.get_specific_course=async (req,res)=>{
    try {
        const course=await courses.findById(req.params.courseId);
        res.json(course);
    }
    catch(err) {
        res.json({message:err});
    }
    
    //res.send('Hello World!!');
}

exports.courses_get_all=async (req,res)=>{
     //console.log('YOU ARE GETTING ALL COURSES');
     //res.send([1,2,3]);
     console.log('---------------')
     try 
     {
        const Courses= await courses.find();
        res.json(Courses); 
     }
     catch(err) {
         console.log('err');
         console.log(err);
        res.json({message:err});
     }
     //res.send(courses);
 }
 exports.create_new_course=async (req,res)=>{
     console.log('in function');
     //console.log(req.body.name);
     //const {error}=validateCourse(req.body);
     //if(req.body.name<3) return res.status(400).send("The name is required");
     const course=new courses({
         //id:courses.length+1,
         name:req.body.name,
         courseCode:req.body.courseCode
     });
     await course.save()
     .then(data=>{
         res.json(data);
     })
     .catch(err=>{
         res.json({message:err});
     });
     //courses.save(course);
     //res.send(course);
 }
exports.update_course=async (req,res)=>{
    const course=await courses.findById(req.params.courseId);
    if(!course) return res.status(404).send('The course with given ID was not found');
   //const {error}=validateCourse(req.body);
    if(req.body.name<3){
        res.status(400).send("name field is invalid");
        return;  
    }
    course.name=req.body.name;
    course.courseCode=req.body.courseCode;
    course.date=req.body.date;
    res.json(course);
}
exports.delete_courses=async (req,res)=>{
    try
    {
        const removedCourse=await courses.remove({_id:req.params.courseId});
        if(!removedCourse) return res.status(404).send('The course with given ID was not found');

        //const index=courses.indexOf(course);
        //courses.splice(index,1);

        res.json(removedCourse);

    }
    catch(err){
        res.json({message:err});
    }

}
exports.patch_update_course=async (req,res)=>{
    try{
        const updatedCourse=await courses.updateOne(
            {_id:req.params.courseId},
            {$set:{name:req.body.name}}
        );
        res.json(updatedCourse);

    } catch(err){
        res.json({message:err});
    }
}
// exports.get_course_by_id=(req,res)=>{
//     const course=courses.find(c=>c.id===parseInt(req.params.id));
//     if(!course) return res.status(404).send('The course with given ID was not found');
//     res.send(course);
// }