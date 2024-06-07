import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
const LiveChat = () => {
    const dispatch = useDispatch();
    const ChatMessages = useSelector((store) => store.chat.messages);
    useEffect(() => {
        const i = setInterval(() => {
            dispatch(addMessage({
                name: "Harsh Chaudhary",
                message: "Lorem ipsum dod ike"
            }))
        }, 2000);
        return () => clearInterval(i);
    }, [])
    return (
        <div className='w-[400px] h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex-col-reverse'>
            {ChatMessages.map((c, i) => <ChatMessage key={i} name={c.name} message={c.message} />)}
        </div>
    )
}

export default LiveChat