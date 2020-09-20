var devhttp = require('./devHttp')


module.exports = async function GetUserGroups(username){
    return devhttp({
        path: `/u/${username}.json`,
        method: "GET"
    }).then(function(res){
        if(res.status !== 200){
            throw new Error("Invalid User")
        } else {
            let groups = res.body.user.groups.sort((a, b) => a.name - b.name)
            for (let i = 0; i < groups.length; i++){
                const groupName = groups[i].name
                return {
                    gName: groupName
                }
            }
        }
    })
}