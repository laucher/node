
const responseAjax=require("./api");
const service=require("./service");
const url=require("url");
const http=require("http")
const {log}=console;

class App{
    constructor(){

    }

    initServer(){
        //初始化的工作~
        // const errorPath=path.resolve(rootPath,staticPath,"./error.html");
        // function getPath(url) {
        //     return path.resolve(rootPath,staticPath,`.${url}`);
        // }

        return (request,response)=>{
            const requsetUrl=url.parse(request.url,true);
            let handleUrlPromise=null;
            const {pathname}=requsetUrl;
            if(requsetUrl.query.ajax){
                handleUrlPromise=responseAjax(pathname);
                response.setHeader("Content-Type", "application/json");
            }else {
                handleUrlPromise=service(pathname);
                response.setHeader("Content-Type", "text/html");
            }
            handleUrlPromise.then((data)=>{
                response.writeHead(200,http.STATUS_CODES[200]);
                response.end(data);
            }).catch((e)=>{
                console.error(e)
                response.writeHead(404,http.STATUS_CODES[404]);
                response.end();
            })
            // if(url==="/"){
            //     url="/index.html";
            // }
            // function staticFunc(url) {
            //     let filePath=getPath(url);
            //     fs.readFile(filePath,'binary',(error,data)=>{
            //         if(error) {
            //             fs.createReadStream(errorPath).pipe(response);
            //             return;
            //         }
            //         response.end(data,'binary');
            //     });
            // }
            // staticFunc(url);

        }
    }
}

module.exports=App;
