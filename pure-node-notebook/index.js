
const http=require("http");
const PORT=9000;
const App=require("./app");
const app=new App();
http.createServer(app.initServer()).listen(PORT,()=>{
    console.log(`server is runing in port ${PORT}`);
});