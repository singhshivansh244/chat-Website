import {useState, useEffect} from 'react'
import './sidebar.css'
import uniqid from 'uniqid'
import Friend from '../friend/Friend'
import { Add } from '@mui/icons-material'
import Chatbody from '../../components/chatbody/Chatbody'
import defaultPic from '../../assets/profile/1.jpg'

export default function Sidebar() {
    const userData = JSON.parse(localStorage.getItem('users'));
    const [user, setUser] = useState(userData ? userData : ['Jack', 'Sparrow']);
    let index = -1;
    let newFriend="";
    function deleteUser(pos) {
        if (pos !== -1) {
            user.splice(pos, 1)
            setUser([...user]);
        }
    }
    const handleMenu = () => {
        newFriend = prompt('Enter new Friend Name');
        if(newFriend !== "" && newFriend !== null){
            setUser(prev => user.concat([newFriend]));
        }
    }
    const [userPic, setUserPic] = useState(defaultPic);
    const [username, setUsername] = useState(user[0]);
    const openFriend = (userPic, username) => {
        setUserPic(userPic);
        setUsername(username);
    }
    useEffect(()=>{ 
        localStorage.setItem('users',JSON.stringify(user));
    },[user])
    return (
        <div className='main-frame'>
            <div className='sidebar-container'>
                <div className="input">
                    <input type="text" placeholder='Search....' className='search-bar-input' />
                    <Add className='menu' style={{ fontSize: 50 }} onClick={handleMenu} />
                </div>
                <hr />
                <div className='friend-chat'>
                    {user.map((u) => { index++; return (<Friend key={uniqid()} username={u} index={index} deleteUser={deleteUser} openFriend={openFriend}/>)})}
                </div>
            </div>
            <Chatbody username={username} pic={userPic}/>
        </div>
    )
}