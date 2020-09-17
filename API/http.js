var axios = require('axios').default

/**
 * @Methods {POST,PUT,DELETE,GET} The discourse uses
 * @Using {Axios}
**/

module.exports = async function http(httpConfig){
    if(httpConfig.method === "GET"){
        return axios.get(httpConfig.url).then(function(res){
            return {
                body: res.data,
                statusCode: res.status
            }
        })
    }
    if(httpConfig.method === "POST"){
        return axios.post(httpConfig.url,httpConfig.data).then(function(res){
            return {
                body: res.data,
                statusCode: res.status
            }
        })
    }
    if(httpConfig.method === "PUT"){
        return axios.put(httpConfig.url,httpConfig.data).then(function(res){
            return {
                body: res.data,
                statusCode: res.status
            }
        })
    }
    if(httpConfig.method === "DELETE"){
        return axios.delete(httpConfig.url).then(function(res){
            return {
                body: res.data,
                statusCode: res.status
            }
        })
    }
    if(httpConfig.method === "DELETEWBODY"){
        return axios.delete(httpConfig.url,httpConfig.data).then(function(res){
            return {
                body: res.data,
                statusCode: res.status
            }
        })
    }
}
