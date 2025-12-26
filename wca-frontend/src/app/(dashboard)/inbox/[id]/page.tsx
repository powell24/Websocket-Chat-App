'use client';

import React, { useRef, useEffect } from 'react';
import { ChatBubble } from '../../../../components/ChatBubble';

// This will be a dynamic route for individual conversations
export default function ConversationPage() {
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Mock data - in real app this would come from params/API
    const conversation = {
        id: 1,
        name: "Nico Tolentino",
        avatar: "N",
        online: true,
    };

    const messages = [
        { id: 1, message: "Hello there!", isSender: false, username: conversation.name, timestamp: "10:00" },
        { id: 2, message: "General Kenobi!", isSender: true, username: "You", timestamp: "10:01" },
        { id: 3, message: "You are a bold one.", isSender: false, username: conversation.name, timestamp: "10:02" },
        { id: 4, message: "Back away! I will deal with this Jedi slime myself.", isSender: true, username: "You", timestamp: "10:03" },
        { id: 5, message: "Your move.", isSender: false, username: conversation.name, timestamp: "10:04" },
        { id: 6, message: "You fool. I've been trained in your Jedi arts by Count Dooku.", isSender: true, username: "You", timestamp: "10:05" },
        { id: 7, message: "Attack Kenobi!", isSender: true, username: "You", timestamp: "10:05" },
        { id: 8, message: "So uncivilized.", isSender: false, username: conversation.name, timestamp: "10:06" },
        { id: 9, message: "You underestimate my power!", isSender: true, username: "You", timestamp: "10:07" },
        { id: 10, message: "Don't try it.", isSender: false, username: conversation.name, timestamp: "10:08" },
        { id: 11, message: "I have the high ground, Anakin.", isSender: false, username: conversation.name, timestamp: "10:09" },
        { id: 12, message: "You were the chosen one!", isSender: false, username: conversation.name, timestamp: "10:10" },
        { id: 13, message: "I HATE YOU!", isSender: true, username: "You", timestamp: "10:11" },
        { id: 14, message: "You were my brother, Anakin. I loved you.", isSender: false, username: conversation.name, timestamp: "10:12" },
        { id: 15, message: "May the Force be with you.", isSender: false, username: conversation.name, timestamp: "10:18" },
    ];

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'instant' });
    }, []);

    return (
        <div className="flex flex-col flex-1 w-full bg-base-100 overflow-hidden">
            {/* Conversation Header */}
            <div className="flex items-center gap-3 p-4 border-b border-base-300">
                <a href="/inbox" className="btn btn-ghost btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </a>
                <div className="avatar placeholder online">
                    <div className="bg-neutral text-neutral-content rounded-full w-10 h-10">
                        <span>{conversation.avatar}</span>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="font-semibold">{conversation.name}</div>
                    <div className="text-xs opacity-60">Active now</div>
                </div>
                <button className="btn btn-ghost btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                </button>
                <button className="btn btn-ghost btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                </button>
            </div>

            {/* Chat Messages Area */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 space-y-4 min-h-0 max-w-full">
                {messages.map((msg) => (
                    <ChatBubble
                        key={msg.id}
                        message={msg.message}
                        isSender={msg.isSender}
                        username={msg.username}
                        timestamp={msg.timestamp}
                    />
                ))}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-base-300">
                <div className="flex gap-2 items-center">
                    <button className="btn btn-ghost btn-circle btn-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                    <input type="text" placeholder="Message..." className="input input-bordered flex-1" />
                    <button className="btn btn-ghost btn-circle btn-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
