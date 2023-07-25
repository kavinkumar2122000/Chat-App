// App.js
import React, { useState } from 'react';
import ChatThread from './components/ChatThread';
import ChatInput from './components/ChatInput';
import './App.css';

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

const App = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (messageText) => {
    const randomUsername = user_list[Math.floor(Math.random() * user_list.length)];
    const newMessage = {
      id: Date.now(),
      username: randomUsername,
      message: messageText,
      likes: 0,
    };
    setMessages([...messages, newMessage]);
  };

  const handleLike = (messageId) => {
    const updatedMessages = messages.map((message) => {
      if (message.id === messageId) {
        return { ...message, likes: message.likes + 1 };
      }
      return message;
    });
    setMessages(updatedMessages);
  };

  return (
    <div className="App">
      {/* Title Bar */}
      <div className="title-bar">
        <h1>ChatApp</h1>
      </div>
      <div className="chat-container">
        <div className="chat-thread-container">
          <ChatThread messages={messages} onLike={handleLike} />
        </div>
        <div className="chat-input-container">
          <ChatInput onSubmit={handleSendMessage} />
        </div>
      </div>
    </div>
  );
};

export default App;
