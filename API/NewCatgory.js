var http = require('./http')

class NewCatgory {
    constructor(args){
        let title = args.title
        let color = args.color
        let text_color = args.text_color
        http({
            url: "https://devforum.roblox.com/categories.json",
            method: "POST",
            data: JSON.parse(`{"name": "${title}", "color": "${color}", "text_color": "${text_color}"} `)
        }).then(function(res){
            if(res.statusCode !== 200){
                throw new Error(res.statusCode + res.body)
            } else {
                return 'Created!'
            }
        })
        return args
    }
}

module.exports = NewCatgory