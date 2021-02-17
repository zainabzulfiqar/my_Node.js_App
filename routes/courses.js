const express=require("express");
const router=express.Router();
//require('dotenv/config');
//router.use(express.json());
//const mongoose=require('mongoose');
const CourseController=require('../controllers/courses');
// mongoose.connect(
//     process.env.DB_Connection,
//     {useNewUrlParser:true},
//     ()=>console.log('connected to Database....')
// );
//Routes
router.get('/get-course-by-id/:courseId',CourseController.get_specific_course);
router.get('/getcourses',CourseController.courses_get_all);
router.post('/createCourse',CourseController.create_new_course);
router.put('/:courseId',CourseController.update_course);
router.delete('/:courseId',CourseController.delete_courses);
router.patch('/:courseId',CourseController.patch_update_course);


//const port=process.env.PORT || 3000;
//app.listen(port,()=>console.log(`Listening on port ${port}...`));
//console.log('listening on port 3000...');


module.exports=router;