import React from 'react'

const User = ({userName,userAge}) => {
  return (
    <div className='User'>
        <p>{userName}</p>
        <p>{userAge}</p>
    </div>
  )
}

export default User