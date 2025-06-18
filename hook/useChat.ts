import {ResponseModel} from "@/type";
import {useState} from "react";

const useChat = () => {
    const [loading, setLoading] = useState(false);

    const sendMessage = async (message: string) => {
        if (loading) return
        setLoading(true);
        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({message}),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data: ResponseModel<string> = await response.json();
            return data;
        } catch (error) {
            console.error('Error sending message:', error);
            return null;
        } finally {
            setLoading(false);
        }
    }

    return {
        sendMessage,
        loading,
    };
}

export default useChat;