import React from 'react';

interface ChatBubbleProps {
    message: string;
    isSender: boolean;
    username: string;
    timestamp: string;
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({ message, isSender, username, timestamp }) => {
    return (
        <div className={`chat ${isSender ? 'chat-end' : 'chat-start'}`}>
            <div className="chat-header">
                {username}
                <time className="text-xs opacity-50 ml-1">{timestamp}</time>
            </div>
            <div className={`chat-bubble max-w-[70%] ${isSender ? 'chat-bubble-primary' : ''}`}>{message}</div>
        </div>
    );
};
