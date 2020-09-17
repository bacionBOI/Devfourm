var COOKIE_CREATOR = require('tough-cookie')

function create(cookie){
    if(!typeof cookie === 'string' && cookie.toLowerCase().includes('warning:-')){
        throw new Error("Cookie is invalid, or not a string!")
    } else {
        const Cookie = new COOKIE_CREATOR.CookieJar()
        Cookie.setCookieSync({
            key: ".ROBLOSECURITY",
            value: cookie,
            domain: "roblox.com",
            hostOnly: false,
            httpOnly: false
        })
    }
}


module.exports = async function createCookie(cookie){
    return create(cookie)
}