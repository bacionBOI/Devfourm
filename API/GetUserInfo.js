var devhttp = require('./devHttp')


module.exports = async function GetUserInfo(username){
    return devhttp({
        path: `/u/${username}.json`,
        method: "GET"
    }).then(function(res){
        if(res.status !== 200){
            throw new Error("Invalid User")
        } else {
            return {
                location: res.body.user.location,
                website: res.body.user.website_name,
                bio: res.body.user.bio_raw,
                featured_topic: {
                    title: res.body.user.featured_topic.title,
                    created: Date.now(res.body.user.featured_topic.created_at)
                },
                admin: res.body.user.admin,
                mod: res.body.user.moderator
            }
        }
    })
}