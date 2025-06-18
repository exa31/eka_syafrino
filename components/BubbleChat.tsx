const BubbleChat = ({message, isUser}: { message: string; isUser: boolean }) => {
    return (
        <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
            <div
                className={`sm:text-sm text-xs max-w-52 p-3 font-semibold ml-2 ${isUser ? 'bg-emerald-200 text-black' : 'bg-slate-700 text-white'} rounded-lg shadow-lg max-w-xs`}>
                <p>{message}</p>
            </div>
        </div>
    );
}

export default BubbleChat;