// ChatMessage.js
import React from 'react';

const ChatMessage = ({ username, message, likes, onLike }) => {
  return (
    <div className={`message ${username === 'You' ? 'message-user' : 'message-other'}`}>
      {username !== 'You' && <div className="user-avatar">{username[0]}</div>}
      <div className="message-content">
        {username !== 'You' && <div className="message-username">{username}</div>}
        <div className="message-text">{message}</div>
      </div>
      <div className="message-like" onClick={onLike}>
        ❤️ {likes}
      </div>
    </div>
  );
};

export default ChatMessage;
