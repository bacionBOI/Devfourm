const createCookie = require("./createCookie")

module.exports = async function loginWithCookie(cookie){
    return createCookie(cookie)
}