const devHttp = require("../devHttp")

class NewThread {
    constructor(args){
        return devHttp({
            path: "/posts.json",
            method: "POST",
            data: JSON.parse(`{"title": "${args.title}","raw": "${args.description}","category": ${args.catgoryID},"created_at": "${Date.now()}"}`)
        }).then(function(res){
            if(res.status !== 200){
                throw new Error("Not Login or have permission")
            }
        })
    }
}

module.exports = NewThread
