const DeleteThread = require("./Admin/DeleteThread")
const loginWithCookie = require("./loginWithCookie")
const RemoveUser = require("./Admin/RemoveUser")
const GetUserInfo = require("./User/GetUserInfo")
const GetUserGroups = require("./User/GetUserGroups")
const GetUserBadges = require("./User/GetUserBadges")
const UpdateCatory = require("./Admin/UpdateCatory")
const UpdateThread = require("./Admin/UpdateThread")

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
    UpdateCatory(opt){
        return UpdateCatory(opt)
    }
    GetUserBadges(username){
        return GetUserBadges(username).then(function(res){
            return res
        })
    }
    UpdateCatory(catID){
        return UpdateCatory(catID)
    }
    UpdateThread(tID){
        return UpdateThread(tID)
    }
}

module.exports = Client
