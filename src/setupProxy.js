const proxy = require("http-proxy-middleware");

module.exports = function(app){
    app.use(
        proxy('/out',{
            target:'http://192.168.1.174:8080',
            changeOrigin:true,
            pathRewrite:{'^/out':''}
        })
    )
}