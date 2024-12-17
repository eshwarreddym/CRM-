import React, { useState } from 'react';
import { 
  ArrowBack, 
  Search, 
  Videocam,
  Apps,
  Add,
  Phone,
  EmojiEmotions,
  AttachFile,
  Image,
  Send,
} from '@mui/icons-material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './ChatWindow.css';

// TODO: Backend Integration Required:
// 1. WebSocket Endpoints:
//    - ws://api/chat/connect - main chat connection
//    - ws://api/chat/typing - typing indicators
//    - ws://api/chat/presence - online status
//
// 2. REST API Endpoints needed:
//    - GET /api/chat/messages - fetch message history
//    - POST /api/chat/messages - send new message
//    - PUT /api/chat/messages/:id/react - handle reactions
//    - GET /api/chat/users - fetch online users
//    - PUT /api/chat/messages/:id/read - mark as read
//    - GET /api/chat/attachments - handle file uploads

const ChatWindow = () => {
   // TODO: Add state management for:
    // - WebSocket connection status
    // - Message loading states
    // - Typing indicators
    // - Online/offline status
    // - Unread message counts
    // - File upload progress
    // - Error states
  const [messages, setMessages] = useState([
    {
      id: 1,
      author: "Ava Williams",
      avatar: "/path-to-avatar.jpg",
      time: "8 min",
      content: "Hey team, how's our presentation looking for the roadshow? 🚗",
      reactions: [
        { emoji: "🎉", count: 7 },
        { emoji: "👋", count: 3 }
      ]
    },
    {
      id: 2,
      author: "Brianna Hernandez",
      avatar: "/path-to-avatar.jpg",
      time: "8 min",
      content: "Owners of each pillar, please confirm that your sections are updated by tomorrow.",
      reactions: [
        { emoji: "✅", count: 5 },
        { emoji: "👍", count: 3 },
        { emoji: "👀", count: 2 }
      ]
    }
  ]);

  // TODO: Implement handlers for:
    // - Message sending
    // - File attachments
    // - Emoji reactions
    // - Message deletion
    // - Message editing
    // - Read receipts
    // - Typing indicators
    
  const [newMessage, setNewMessage] = useState('');

  return (

    // TODO: Implement UI for:
        // - Loading states
        // - Error messages
        // - Typing indicators
        // - Online status
        // - File upload progress
        // - Read receipts
        // - Message delivery status
    <div className="chat-window-container">
      <div className="chat-window-layout">
        <div className="chat-window-sidebar">
          <div className="chat-window-new-chat">
            <button><Add /> New chat</button>
          </div>

          <div className="chat-window-section">
            <div className="chat-window-section-header">Shortcuts</div>
            <div className="chat-window-item">Home <span>(no of unread messages)</span></div>
            <div className="chat-window-item">Mentions</div>
            <div className="chat-window-item">Starred</div>
          </div>

          <div className="chat-window-section">
            <div className="chat-window-section-header">Direct messages</div>
            {["Aisha Patel", "Landon Garcia", "Antonio Smith", "Aziz Bashir", "Kayla, Tariq", "Benjamin Khan", "Alessandra Russo", "Jeanne Deneuve"].map((name) => (
              <div key={name} className="chat-window-item">{name}</div>
            ))}
          </div>

          <div className="chat-window-section">
            <div className="chat-window-section-header">Spaces</div>
            {["Cymbal Core Teams", "Cymbal Announcements", "Cymbal Leads", "Global Sales", "Marketing EMEA", "WebVR Lab", "Offsite event planning"].map((space) => (
              <div key={space} className="chat-window-item">{space}</div>
            ))}
          </div>
        </div>

        <div className="chat-window-main">
          <div className="chat-window-header">
            <div className="header-left">
              <ArrowBack />
              <div>
                <h2>Antonio, Brianna, Landon, Kayla, ...</h2>
                <span>15 members</span>
              </div>
            </div>
            <div className="header-actions">
              <Search />
              <Videocam />
              <Apps />
            </div>
          </div>

          <div className="chat-window-messages">
            {messages.map((message) => (
              <div key={message.id} className="message">
                <img src={message.avatar} alt="" className="avatar" />
                <div className="message-content">
                  <div className="message-header">
                    <span className="author">{message.author}</span>
                    <span className="time">{message.time}</span>
                  </div>
                  <div className="message-text">{message.content}</div>
                  <div className="reactions">
                    {message.reactions.map((reaction, index) => (
                      <span key={index} className="reaction">
                        {reaction.emoji} {reaction.count}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="chat-window-input-area">
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Type message here"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <div className="input-actions">
                <Phone/>
                <WhatsAppIcon />
                <EmojiEmotions />
                <AttachFile />
                <Image />
                <Send />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
