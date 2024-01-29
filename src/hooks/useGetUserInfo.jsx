export const useGetUserInfo=()=>{
    // this hook is for getting user info from localstorage
    const {name,profilePhoto,userID,isAuth} = JSON.parse(localStorage.getItem("auth"));
    let authStatus
    if(isAuth == true){
        authStatus= true
    }else{
        authStatus = false
    }
    return{name,profilePhoto,userID,isAuth,authStatus}
}