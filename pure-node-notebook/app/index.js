
const fs=require("fs");

class App{
    constructor(){

    }

    initServer(){
        //初始化的工作~

        return (request,response)=>{

            fs.readFile('./public/index.html','utf8',(error,data)=>{
                response.end(data);
            });
            
        }
    }
}

module.exports=App;
