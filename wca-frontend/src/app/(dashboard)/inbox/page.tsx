'use client';

import React from 'react';
import { Search } from 'lucide-react';

// Mobile view - shows the inbox list directly
// Desktop view - shows empty state (sidebar is in layout)
export default function InboxPage() {
  return (
    <>
      {/* Mobile: Show inbox list */}
      <div className="flex md:hidden flex-col flex-1 w-full bg-base-100 overflow-hidden">
        <MobileInboxView />
      </div>

      {/* Desktop: Show empty state */}
      <div className="hidden md:flex flex-col items-center justify-center h-full bg-base-100">
        <div className="w-24 h-24 rounded-full border-2 border-base-content flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
          </svg>
        </div>
        <h2 className="text-xl font-semibold mb-1">Your messages</h2>
        <p className="text-base-content/60 mb-4">Send a message to start a chat.</p>
        <button className="btn btn-primary">Send message</button>
      </div>
    </>
  );
}

// Mobile inbox view component
function MobileInboxView() {
  const conversations = [
    { id: 1, name: "Alice Johnson", avatar: "A", lastMessage: "Hey! How are you?", time: "2m", unread: true },
    { id: 2, name: "Bob Smith", avatar: "B", lastMessage: "See you tomorrow!", time: "15m", unread: false },
    { id: 3, name: "Charlie Brown", avatar: "C", lastMessage: "Sounds good 👍", time: "1h", unread: true },
    { id: 4, name: "Diana Ross", avatar: "D", lastMessage: "Thanks for sharing!", time: "2h", unread: false },
    { id: 5, name: "Edward Chen", avatar: "E", lastMessage: "Let me check and get back to you", time: "3h", unread: false },
    { id: 6, name: "Fiona Garcia", avatar: "F", lastMessage: "That's awesome! 🎉", time: "5h", unread: true },
    { id: 7, name: "George Miller", avatar: "G", lastMessage: "Can we reschedule?", time: "1d", unread: false },
    { id: 8, name: "Hannah Wilson", avatar: "H", lastMessage: "I'll send it over soon", time: "1d", unread: false },
    { id: 9, name: "Ivan Petrov", avatar: "I", lastMessage: "Perfect, thanks!", time: "2d", unread: false },
    { id: 10, name: "Julia Martinez", avatar: "J", lastMessage: "See you at the meeting", time: "3d", unread: false },
  ];

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-center p-4 border-b border-base-300">
        <span className="font-bold text-lg">house_remover</span>
      </div>

      {/* Search Bar */}
      <div className="px-4 py-2">
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 opacity-50 z-10" />
          <input type="text" placeholder="Search" className="input input-bordered w-full pl-10 bg-base-200" />
        </div>
      </div>

      {/* Messages Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <span className="font-bold">Messages</span>
        <button className="text-primary text-sm">Requests</button>
      </div>

      {/* Conversation List */}
      <div className="flex-1 overflow-y-auto">
        {conversations.map((convo) => (
          <a
            key={convo.id}
            href={`/inbox/${convo.id}`}
            className="flex items-center gap-3 px-4 py-3 hover:bg-base-200 transition-colors cursor-pointer"
          >
            <div className="avatar placeholder">
              <div className="bg-neutral text-neutral-content rounded-full w-14 h-14 flex items-center justify-center">
                <span className="text-xl">{convo.avatar}</span>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold truncate">{convo.name}</div>
              <div className={`text-sm truncate ${convo.unread ? 'text-base-content font-semibold' : 'opacity-60'}`}>
                {convo.lastMessage} · {convo.time}
              </div>
            </div>
            {convo.unread && (
              <div className="w-2 h-2 rounded-full bg-primary"></div>
            )}
          </a>
        ))}
      </div>
    </>
  );
}
