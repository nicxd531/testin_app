export const useGetUserInfo=()=>{
    // this hook is for getting user info from localstorage
    const {name,profilePhoto,userID,isAuth} = JSON.parse(localStorage.getItem("auth"));
    return{name,profilePhoto,userID,isAuth}
}