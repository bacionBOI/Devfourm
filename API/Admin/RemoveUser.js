let http = require('./http')

module.exports = async function removeUser(options){
    return http({
        url: `https://discourse.example.com/admin/users/${options.UserID}.json`,
        method: "DELETEWBODY",
        data: JSON.parse(`{
            "delete_posts": ${options.DELETE_POSTS},
            "block_email": ${options.BLOCK_EMAIL},
            "block_urls": ${options.BLOCK_URLS},
            "block_ip": ${options.BLOCK_IP}
          }`)
    }).then(function(res){
        if(res.statusCode !== 200){
            throw new Error("Not Login or Admin")
        }
    })
}