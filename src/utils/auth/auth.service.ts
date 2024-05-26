import { AuthKey } from "@/contants"
import { decodedToken } from "./jwt"
import { JwtPayload } from "jwt-decode"

type TUserInfo ={
    email:string, id:string, role:string  ; iat: Number;
  exp: Number;

}

export const getUserInfo =():null | JwtPayload |TUserInfo=>{
    const authToken=localStorage.getItem(AuthKey)
    console.log(authToken)


    if(authToken){
        const decodedData = decodedToken(authToken) as JwtPayload |TUserInfo
        // console.log(decodedData);
        return decodedData
    }
  return null
}


 export const isLoggedIn=()=>{
    const authToken=localStorage.getItem(AuthKey)
    if(authToken){
        return !!authToken
    }
    return false
}

export const logOut=()=>{

    if(!AuthKey || typeof window === "undefined"){
        return ''
    }
   localStorage.removeItem(AuthKey)
}