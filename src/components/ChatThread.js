// ChatThread.js
import React from 'react';
import ChatMessage from './ChatMessage';

const ChatThread = ({ messages, onLike }) => {
  return (
    <div className="chat-thread">
      {messages.map((message) => (
        <ChatMessage
          key={message.id}
          username={message.username}
          message={message.message}
          likes={message.likes}
          onLike={() => onLike(message.id)}
        />
      ))}
    </div>
  );
};

export default ChatThread;
