// const fs=require('fs');

// fs.readdir('./',function(err,files){
//     if(err) console.log('Error',err);
//     else console.log('Result',files);
// });

//var EventEmitter=require('events');  //class

// const emitter=new EventEmitter();

// //Register a Listener 
// emitter.on('messageLogged',function(){
//     console.log('Listener Called');
// });



// //raise an event 
// emitter.emit('messageLogged');




// const Logger=require('./logger');
// const logger=new Logger();
// logger.on('logging',(arg)=>{
//     console.log('Listener Called',arg);
// });
// logger.log('message');



//const http=require('http');
const Joi=require('joi');
const express=require('express');
const app=express();
require('dotenv/config');
const bodyParser=require('body-parser');
app.use(bodyParser.json());
const mongoose=require('mongoose');

//Import Routes
const coursesRoutes=require('./routes/courses');
app.use('/api/courses',coursesRoutes);

mongoose.connect(
    process.env['DB_Connection'],
    {useNewUrlParser:true},
    ()=>console.log('connected to Database....')
);
// const courses=[
//     {id:1,name:'course1'},
//     {id:2,name:'course2'},
//     {id:3,name:'course3'},
//     {id:4,name:'course4'}
// ];
//  app.get('/',(req,res)=>{
//     res.send('Hello World!!!!');
//  });
// app.get('/api/courses',(req,res)=>{
//     //res.send([1,2,3]);
//     res.send(courses);
// });
// app.post('/api/courses', (req,res)=>{
//     //console.log(req.body.name);
//     //const {error}=validateCourse(req.body);
//     if(req.body.name<3) return res.status(400).send("The name is required");
//     const course={
//         id:courses.length+1,
//         name:req.body.name
//     };
//     courses.push(course);
//     res.send(course);
// });
// app.put('/api/courses/:id',(req,res)=>{
//     const course=courses.find(c=>c.id===parseInt(req.params.id));
//     if(!course) return res.status(404).send('The course with given ID was not found');
//    //const {error}=validateCourse(req.body);
//     if(req.body.name<3){
//         res.status(400).send("name field is invalid");
//         return;  
//     }
//     course.name=req.body.name;
//     res.send(course);
// });
// app.get('/api/courses/:id',(req,res)=>{
//     const course=courses.find(c=>c.id===parseInt(req.params.id));
//     if(!course) return res.status(404).send('The course with given ID was not found');
//     res.send(course);
// });
// app.delete('/api/courses/:id',(req,res)=>{
//     const course=courses.find(c=>c.id===parseInt(req.params.id));
//     console.log(course);
//     if(!course) return res.status(404).send('The course with given ID was not found');

//     const index=courses.indexOf(course);
//     courses.splice(index,1);

//     res.send(course);

// });
// function validateCourse(course){
//     const schema={
//         name: Joi.string().min(3).required()
//     };

//     return Joi.validate(course,schema);
// }

// const server=http.createServer((req,res)=>{
//     if(req.url==='/'){
//         res.write('Hello World');
//         res.end();
//     }
//     if(req.url==='/api/courses'){
//         res.write(JSON.stringify([1,2,3]));
//         res.end();
//     }

// });
//PORT
const port=process.env.PORT || 3000;
app.listen(port,()=>console.log(`Listening on port ${port}...`));
//console.log('listening on port 3000...');












