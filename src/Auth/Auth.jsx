/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react'
export const TokenAuthContext=createContext()
function TokenAuth({children}) {
  const[isAuthorized,setIsAuthorized]=useState(false)
  useEffect(()=>{
    const token=sessionStorage.getItem("token")
 if(token ){
 
      setIsAuthorized(true)     
    }
    else{
      setIsAuthorized(false)

    }
  },[isAuthorized])
  return (
    <div>
<TokenAuthContext.Provider value={{isAuthorized,setIsAuthorized}}>
  {children}
</TokenAuthContext.Provider>

    </div>
  )
}

export default TokenAuth