/**
 * Created by kaimi on 2017/3/28.
 */

const fs=require("fs");
const process=require("process");
const path=require("path");
const rootPath=process.cwd();
const staticPath=path.resolve(rootPath,"./public");

function getPath(url){
    return path.resolve(staticPath,`.${url}`);
}

function hanleContorller(url) {
    const realPath=getPath(url);
    realPath==="/"?"/index.html":realPath;
    return new Promise((resolve,reject)=>{
        fs.readFile(realPath,(error,data)=>{
            if (error) return reject(error);
            resolve(data);
        })
    })
};

module.exports=hanleContorller;



