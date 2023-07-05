import React, { useEffect } from 'react'
import AuthStore from '../stores/AuthStore'

export default function LogoutPage() {
    const store = AuthStore()
    useEffect(()=>{
        store.logout()
    },[])
  return (
    <div>
      You Are Now Logged Out
    </div>
  )
}
