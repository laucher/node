

const fs=require("fs");
const process=require("process");
const path=require("path");

console.log(__dirname);
console.log(process.cwd());

const dirPath=path.resolve(__dirname,"../public");
const dirname=path.join(dirPath,"/index.html");
const fsWatcher= fs.watchFile(dirname,(eventType,filename)=>{
    console.log(`事件类型是: ${eventType.toString()}`);
    if (filename) {
        console.log(`提供的文件名: ${filename.toString()}`);
    } else {
        console.log('未提供文件名');
    }
});
const nedirname=path.join(dirPath,"/index1.html");
fs.rename(dirname,nedirname,(a,b)=>{
    console.log(a);
    console.log(b);
})