/*
保存用户状态 
localStorage存储  
SessionStorage会话存储,不能保存用户状态
*/

export const saveUsername = (username)=>{
    return window.localStorage.setItem('username',username)
}
export const getUsername = ()=>{
    return window.localStorage.getItem('username')
}
export const removeUsername = ()=>{
    return window.localStorage.removeItem('username')
}

