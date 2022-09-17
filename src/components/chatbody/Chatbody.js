import './chatbody.css'
import {useState, useEffect} from 'react'
import { StrikethroughS, Link, FormatListNumbered, FormatListBulleted, FormatAlignJustify, Code, AddCircleOutline, SentimentSatisfiedAlt, DownloadDone } from '@mui/icons-material'
import Message from '../message/Message'
import uniqid from 'uniqid'

export default function Chatbody({username, pic}) {
    const messageData = JSON.parse(localStorage.getItem('chat'));
    const [text, setText] = useState('');
    const [message, setMessage] = useState(messageData ? messageData : ['How are you?']);
    const [css, setCss] = useState({});
    const [flag, setFlag] = useState(false);
    const [link, setLink] = useState(false);
    const handleSubmit = () => {
        const ele = document.getElementById('chat-text');
        setMessage(prev => [...prev, ele.value]);
        setText('');
    }
    useEffect(()=>{
        localStorage.setItem('chat', JSON.stringify(message));
    }, [message])
    let ind = -1;
    const handleToolBox = (tag) => {
        switch (tag) {
            case 1:
                setCss((prev) => prev = {fontWeight: 'bold'})
                setFlag(prev => !prev)
                break;
            case 2:
                setCss((prev) => prev = { fontStyle: 'italic' })
                setFlag(prev => !prev)
                break;
            case 3:
                setCss((prev) => prev = { textDecoration: 'line-through' })
                setFlag(prev => !prev)
                break;
            case 4:
                setLink(prev => !prev)
                break;
            default:
                break;
        }
    }
    const handleChange = (event) => {
        setText(prev => event.target.value);
    }
  return (
    <div className='chat-container'>
        <div className='chat-title'>
            <img src={pic} alt="Display Picture" className='userPic'/>
            <h1 className='userName'>{username}</h1>
        </div>
        <hr />
        <div className="chat-main-body">
            <div className="chat-screen">
                { 
                      message.map((m) => {
                        ind++;
                        return(
                          <Message key={uniqid()} chats={m} pos={ind} />
                        )
                    })
                }
            </div>
            <div className="chat-input-container">
                <div className="toolbox">
                    <span className='editbox' onClick={event => handleToolBox(1)}>B</span>
                    <span className='editbox' style={{fontStyle: 'italic'}} onClick={event => handleToolBox(2)}>I</span>
                    <span className='editbox' onClick={event => handleToolBox(3)}><StrikethroughS /></span>
                    <span className='editbox' onClick={event => handleToolBox(4)}><Link /></span>
                    <span className='editbox' onClick={event => handleToolBox(5)}><FormatListBulleted/></span>
                    <span className='editbox' onClick={event => handleToolBox(6)}><FormatListNumbered/></span>
                    <span className='editbox' onClick={event => handleToolBox(7)}><FormatAlignJustify/></span>
                    <span className='editbox' onClick={event => handleToolBox(8)}><Code/></span>
                </div>
                <textarea type= {{link} ? 'url' : "text"} style={flag ? css : {}} id='chat-text' className='chat-text-input' onChange={event => handleChange(event)} value={text}/>
                <div className="toolbox">
                    <span className='editbox' onClick={event => handleToolBox(9)}><AddCircleOutline /></span>
                    <span className='editbox' onClick={e => handleToolBox(5)}><SentimentSatisfiedAlt /></span>
                    <span className='editbox' style={{ fontSize: '24px' }} onClick={event => handleToolBox(11)}>@</span>
                    <span className="submit-btn editbox" onClick={handleSubmit}><DownloadDone /></span>
                </div>
            </div>
        </div>
    </div>
  )
}
