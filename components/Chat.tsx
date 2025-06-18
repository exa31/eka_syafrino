'use client';

import {IoMdChatboxes, IoMdClose} from "react-icons/io";
import {useState} from "react";
import useChat from "@/hook/useChat";
import BubbleChat from "@/components/BubbleChat";

const Chat = () => {

    const [chat, setChat] = useState<string>('');
    const [open, setOpen] = useState<boolean>(false);
    const [messages, setMessages] = useState<string[]>([]); // Store chat messages
    const {sendMessage, loading} = useChat()

    const handleSendMessage = async () => {
        if (!chat.trim()) return;
        try {
            const response = await sendMessage(chat);
            if (!response) return;
            console.log(messages);
            const dataTempMessages = [
                ...messages,
                chat, // Add user's message
                response.data // Add response from the server
            ]
            setMessages(dataTempMessages); // Update messages state
            setChat(''); // Clear the input after sending
        } catch (error) {
            console.error('Error sending message:', error);
            if (error instanceof Error) {
                const dataTempMessages = [
                    ...messages,
                    chat, // Add user's message
                    error.message // Add error message from the server
                ]
                setMessages(dataTempMessages); // Update messages state
            }
        }
    }

    const handleSubmit = () => {
        if (!chat.trim()) return;
        const newDataMessages = [
            ...messages,
            chat // Add user's message
        ]
        setMessages(newDataMessages); // Update messages state
        handleSendMessage()
        setChat(''); // Clear the input after sending
    }

    return (
        <>
            {
                open && (
                    <div
                        className="fixed z-50 bottom-28 rounded-2xl overflow-hidden sm:w-72 w-52 right-4 text-white hover:text-gray-200 bg-slate-800 duration-300 transition-all shadow-lg">
                        <div className={''}>
                            <div
                                className={'custom-scroll p-2 pb-0 space-y-4 h-full min-h-96 max-h-96 overflow-y-auto flex flex-col'}>
                                <div className={'grow'}>
                                    <BubbleChat
                                        message={
                                            "Kamu bisa tanya apa saja tentang Eka — keahliannya, pengalaman kerja, teknologi yang dikuasai, atau proyek yang pernah dibuat!"
                                        }
                                        isUser={false}
                                    />
                                    {
                                        messages.map((message, index) => (
                                            <BubbleChat key={index} message={message} isUser={index % 2 === 0}/>
                                        ))
                                    }
                                </div>
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        handleSubmit();
                                    }}
                                    className="flex items-center sticky bottom-0 gap-2  bg-[#1e293b] rounded-xl py-1 rounded-b-none shadow-lg">
                                    <textarea
                                        placeholder="Type a message..."
                                        value={chat}
                                        onChange={(e) => setChat(e.target.value)}
                                        rows={2}
                                        className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                                    />
                                    <button
                                        disabled={loading}
                                        className="bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-1 rounded-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {
                                            loading ? (
                                                <div className="spinner mx-auto ">
                                                </div>
                                            ) : 'Send'
                                        }
                                    </button>
                                </form>

                            </div>
                        </div>
                    </div>
                )
            }
            {
                !open ?
                    <button
                        onClick={() => setOpen(!open)}
                        className="fixed z-40 bottom-10 right-4 text-white hover:text-gray-200 cursor-pointer hover:bg-slate-900 duration-300 transition-all bg-[#0a0e1a] rounded-full p-4 shadow-lg">
                        <IoMdChatboxes className={'text-5xl'}/>
                    </button>
                    :
                    <button
                        onClick={() => setOpen(!open)}
                        className="fixed z-40 bottom-10 right-4 text-white hover:text-gray-200 cursor-pointer hover:bg-slate-900 duration-300 transition-all bg-[#0a0e1a] rounded-full p-4 shadow-lg">
                        <IoMdClose className={'text-5xl'}/>
                    </button>
            }
        </>

    );
}

export default Chat;