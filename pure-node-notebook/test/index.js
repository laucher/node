const http=require("http");
const {log}=console;
const fs=require("fs");
const process=require("process");
const path=require("path");
const url=require("url");
const net=require("net");

const rootPath=process.cwd();


// const videoPath=path.resolve(rootPath,'./public/vide/神盾局特工第四季15.mkv');

// fs.stat(videoPath,(error,stat)=>{
//     res.writeHead(200,"Ok",{
//         "Content-Type":"application/octet-stream",
//         "Content-Length":stat.size,
//         "Content-Disposition":"attachment;filename="+encodeURIComponent("神盾局特工第四季15.mkv"),
//         "Content-Transfer-Encoding": "binary"
//
//     });
//     fs.createReadStream(path.resolve(rootPath,'./public/vide/神盾局特工第四季15.mkv')).pipe(res);
// })


function getAllProto(obj) {
    for(let key in obj){
        log('get some keys');
        log(key);
    }
}

const server=http.createServer((req,res)=>{
    // req.on('connect',()=>{
    //         log('connecting ~ ~ ~');
    // });
    // for(let key in req){
    //     log(key)
    // }
    // log('setHead' in req);
    // log(req.statusCode);
    // log(req.statusMessage)
    // log(req.url)
    // log(url.parse("http://fuck/p/a/t/h?query=string#hash",true,false))
    // res.writeHeader(200,'error',{
    //     "hah":"123"
    // });
    // res.end('hello world','utf8');
    // log(res.statusCode)
    // log(res.statusMessage);
    // for(let key in res){
    //     log(key)
    // }
    // log(res.output);


}).listen(10240,()=>{
    log("start linsten 10240");
});

// server.on("listening",()=>{
//     log(server.address());
//     getAllProto(server);
//     log("something is listening");
// })

server.on('request',(req,res)=>{
    log('request');
    log(req.method);
    res.setHeader('Content-Type','text/html');
    res.write('<h1>hello world</h1>');
    res.end();
});

process.on('uncaughtException', (e)=>{
    log(e.stack)
})


// const proxy=http.createServer((req,res)=>{
//     res.writeHead(200,{
//         'Content-Type':'text/plain'
//     });
//     res.end('okay');
// });
//
// proxy.on('connect',(req,cltSocket,head)=>{
//
//     log(req);
//     log(cltSocket);
//     log(head);
//
//     let srvUrl=url.parse(`http://${req.url}`);
//
//     let srvSocket=net.connect(srvUrl.port,srvUrl.hostname,()=>{
//         cltSocket.write('HTTP/1.1 200 连接已建立\r\n'+'委托代理:Node.js-代理\r\n'+'\r\n');
//     });
//
//     srvSocket.write(head);
//
//     srvSocket.pipe(cltSocket);
//     cltSocket.pipe(srvSocket);
//
// });
//
// proxy.listen(1337,'127.0.0.1',()=>{
//
//     const options = {
//         port:1337,
//         hostname:"127.0.0.1"
//     }
// });
