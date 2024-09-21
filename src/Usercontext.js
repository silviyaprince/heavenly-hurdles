import { Children, createContext, useState } from "react";

let Usercontext=createContext()
export default Usercontext
export const UserProvider=({Children})=>{
    const [userdata,setUserdata]=useState([])
    return(
        <Usercontext.Provider value={[userdata,setUserdata]}>
{Children}
        </Usercontext.Provider>
    )
}
