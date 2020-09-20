const http = require("../http")


module.exports = async function getUserBadges(username){
    var httpConfig = {
        url: `https://devforum.roblox.com/u/${username}.json`,
        method: "GET",
    }
    return http(httpConfig).then(function(res){
        if(res.statusCode !== 200){
            throw new Error("Invalid User")
        } else {
            let Badges = res.body.badges.sort((a,b) => a.name - b.name)
            for (let i = 0; i < Badges.length; i++){
                let badgeName = Badges[i].name
                let badgeCount = Badges[i].grant_count
                return {
                    name: badgeName,
                    count: badgeCount
                }
            }
        }
    })
}
