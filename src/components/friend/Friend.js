import './friend.css'
import {useState, useEffect} from 'react'
import {RemoveCircle} from '@mui/icons-material'

export default function Friend({ username, index, deleteUser, openFriend }) {
    const userProfile = [
        { icon: require('../../assets/profile/1.jpg') },
        { icon: require('../../assets/profile/2.jpg') },
        { icon: require('../../assets/profile/3.jpg') },
        { icon: require('../../assets/profile/4.jpg') },
        { icon: require('../../assets/profile/5.jpg') },
    ];
    return (
        <div>
            <div className='friend-container' onClick={event => openFriend(userProfile[index % userProfile.length].icon, username)}>
            <img src={userProfile[index%userProfile.length].icon} alt="Icon" className='user-icon'/>
            <h2 className='friend-username'>{username}</h2>
            <RemoveCircle className='removeFriend' onClick={event => deleteUser(index)}/>
        </div>
        <hr />
        </div>
    )
}