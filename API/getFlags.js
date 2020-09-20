var http = require("./http")

module.exports = async function getFlags(options){
    if(options.FlagType === FlagType.Active){
        return http({
            url: `https://devforum.roblox.com/admin/flags/active.json`,
            method: "GET"
        }).then(function(res){
            if(res.statusCode !== 200){
                throw new Error("Not login, or not an admin.")
            }
        })
    }
    if(options.FlagType === FlagType.Old){
        return http({
            url: `https://devforum.roblox.com/admin/flags/old.json`,
            method: "GET"
        }).then(function(res){
            if(res.statusCode !== 200){
                throw new Error("Not login, or not an admin.")
            }
        })
    }
}