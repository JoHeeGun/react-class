import React from 'react'

const Profile = (props) => {
  const {name,age} = props.data;
  return(
    <div>
      <h2>name = {name}</h2>
      <h2>age = {age}</h2>
    </div>
  )
}


export default Profile;