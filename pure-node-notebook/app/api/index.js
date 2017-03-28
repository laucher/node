
function responseAjax(url) {
    try{
        const res=[{
            name:"adam",
            age:19,
            address:"北京市"
        },{
            name:"joke",
            age:25,
            address:"上海市"
        },{
            name:"laucher",
            age:29,
            address:"杭州市"
        }];
        return Promise.resolve(JSON.stringify(res))
    }catch(e){
        return Promise.reject(e);
    }

}


module.exports=responseAjax;
