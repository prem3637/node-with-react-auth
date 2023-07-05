import React, { useEffect } from 'react'
import AuthStore from '../stores/AuthStore'
import { Navigate } from 'react-router-dom'

export default function RequireAuth(props) {
    const store = AuthStore()

    useEffect(()=>{
        if(store.loggedIn===null){
            store.checkAuth()
        }
    },[])
    if(store.loggedIn===null){
        return <div>Loading...</div>
    }

    if(store.loggedIn===false){
        return <Navigate to='/login'/>
    }
  return (
    <div>
      {props.children}
    </div>
  )
}
