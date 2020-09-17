var devHttp = require("./devHttp")

module.exports = async function deleteThread(threadID){
    var httpConfig = {
        path: '/posts/' + threadID + '.json',
        method: "PUT"
    }
    return devHttp(httpConfig).then(function(res){
        if(res.status !== 200){
            throw new Error("Not Login")
        }
    })
}