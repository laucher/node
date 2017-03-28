const http=require("http");
const App=require("./app");
const PORT=10240;
const app=new App();


http.createServer(app.initServer()).listen(PORT,()=>{
    console.log(`server is listening the port ${PORT}`);
})
