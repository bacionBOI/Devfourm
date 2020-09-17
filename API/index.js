const DeleteThread = require("./DeleteThread")
const loginWithCookie = require("./loginWithCookie")
const RemoveUser = require("./RemoveUser")
const GetUserInfo = require("./GetUserInfo")
const GetUserGroups = require("./GetUserGroups")

class Client {
    constructor(){
    }
    DeleteThread(threadID){
        return DeleteThread(threadID)
    }
    loginWithCookie(cookie){
        return loginWithCookie(cookie)
    }
    GetUserGroups(username){
        return GetUserGroups(username).then(function(res){
            return res
        })
    }
    GetUserInfo(username){
        return GetUserInfo(username).then(function(res){
            return res
        })
    }
    RemoveUser(options){
        return RemoveUser(options)
    }
}



module.exports = Client