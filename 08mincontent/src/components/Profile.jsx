import React, { useContext } from 'react'
import UserContext from '../Context/Usercontext'

function Profile() {
    const{user}=useContext(UserContext)
    console.log(user)
    if(!user) return <h1>not logged in</h1>
  return (
    <div>profile :{user.username}</div>
    
  )
}

export default Profile