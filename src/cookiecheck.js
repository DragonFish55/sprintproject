
let coockiecheck = (cookielist, cookie) => {
    let found = false
    let username = ""
    let i = cookielist.search(cookie + "=")
    if(i != -1){
        found = true
        for(let k = i+cookie.length+1; k < cookielist.length; k++){
            username = username + cookielist[k]
            if((cookielist[k] === ';') || ((cookielist.length-1) === k)){
                break
            }
            
        }
    }
    return username
}


export default coockiecheck;