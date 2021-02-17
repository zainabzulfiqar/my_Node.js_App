var EventEmitter=require('events');  //class

var url='http://mylogger.io/log';
class Logger extends EventEmitter {
 log(message){
    //send http request
    console.log(`hello : ${message}`);

    this.emit('logging',{id:1,data:'hello world'});
   }
}

module.export.logger=Logger;
