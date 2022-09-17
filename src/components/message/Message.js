import './message.css'

export default function Message({chats, pos}) {
  return (
    <>
      <div className = { pos % 2 === 1 ? 'chat-area' : 'chat-area text'}>
          <h1>{chats}</h1>
      </div>
      <hr />
    </>
  )
}
