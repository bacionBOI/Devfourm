const http = require("./http")

module.exports = async function devfourmhttp(httpConfig){
    return http({
        url: "https://devforum.roblox.com/" + httpConfig.path,
        method: httpConfig.method,
        data: httpConfig.data
    }).then(function(res){
        return {
            status: res.statusCode,
            body: res.body
        }
    })
}