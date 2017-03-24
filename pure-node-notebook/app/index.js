
const fs=require("fs");
const process=require("process");
const rootPath=process.cwd();
const path=require("path");
const staticPath="./public";
const {log}=console;

class App{
    constructor(){

    }

    initServer(){
        //初始化的工作~
        const errorPath=path.resolve(rootPath,staticPath,"./error.html");
        function getPath(url) {
            return path.resolve(rootPath,staticPath,`.${url}`);
        }

        return (request,response)=>{
            log('打印requet')
            log(request.url)
            let {url}=request;
            if(url==="/"){
                url="/index.html";
            }
            function staticFunc(url) {
                let filePath=getPath(url);
                fs.readFile(filePath,'binary',(error,data)=>{
                    if(error) {
                        fs.createReadStream(errorPath).pipe(response);
                        return;
                    }
                    response.end(data,'binary');
                });
            }

            staticFunc(url);

        }
    }
}

module.exports=App;
