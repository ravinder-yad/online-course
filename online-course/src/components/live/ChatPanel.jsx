import React, { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiUser, FiInfo, FiTrash2, FiX, FiMessageSquare } from 'react-icons/fi';

const socket = io('http://localhost:5001');

const ChatPanel = ({ roomId, user, onClose }) => {
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [typingUsers, setTypingUsers] = useState([]);
  const [chatLog, setChatLog] = useState([
    { id: 1, user: 'System', message: 'Class session started. Welcome!', time: '10:00 AM', isSystem: true },
    { id: 2, user: 'Instructor', message: 'Hello everyone! Please turn on your cameras if possible.', time: '10:01 AM', isInstructor: true }
  ]);
  const chatEndRef = useRef(null);
  const typingTimeoutRef = useRef(null);

  useEffect(() => {
    // Fetch historical messages from DB
    const fetchHistory = async () => {
      try {
        const response = await fetch(`http://localhost:5001/api/live/${roomId}`);
        if (response.ok) {
          const data = await response.json();
          if (data.messages && data.messages.length > 0) {
            const formattedHistory = data.messages.map(m => ({ ...m, id: m._id }));
            setChatLog(prev => [
              ...prev.filter(msg => msg.isSystem), // Keep initial system message
              ...formattedHistory
            ]);
          }
        }
      } catch (err) {
        console.error("Error fetching chat history:", err);
      }
    };

    fetchHistory();
    socket.emit('join_room', roomId);

    socket.on('receive_message', (data) => {
      setChatLog(prev => [...prev, { ...data, id: Date.now() }]);
    });

    socket.on('user_typing', (data) => {
      if (data.user !== user) {
        setTypingUsers(prev => [...new Set([...prev, data.user])]);
      }
    });

    socket.on('user_stop_typing', (data) => {
      setTypingUsers(prev => prev.filter(u => u !== data.user));
    });

    return () => {
      socket.off('receive_message');
      socket.off('user_typing');
      socket.off('user_stop_typing');
    };
  }, [roomId, user]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatLog, typingUsers]);

  const handleTyping = (e) => {
    setMessage(e.target.value);

    if (!isTyping) {
      setIsTyping(true);
      socket.emit('typing', { roomId, user });
    }

    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    
    typingTimeoutRef.current = setTimeout(() => {
      setIsTyping(false);
      socket.emit('stop_typing', { roomId, user });
    }, 2000);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const msgData = {
      roomId,
      user: user || 'Student',
      message,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    socket.emit('send_message', msgData);
    socket.emit('stop_typing', { roomId, user });
    setIsTyping(false);
    setMessage('');
  };

  return (
    <div className="h-full flex flex-col bg-white overflow-hidden shadow-2xl relative">
      {/* Premium Header */}
      <div className="p-6 bg-gray-900 flex items-center justify-between border-b border-white/5">
        <div className="flex items-center gap-3">
           <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary shadow-lg shadow-primary/10">
              <FiMessageSquare className="text-xl" />
           </div>
           <div>
              <h3 className="text-lg font-black text-white leading-none">Class Chat</h3>
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30 mt-1.5 flex items-center gap-2">
                <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></span>
                Live Interaction
              </p>
           </div>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setChatLog([{ id: Date.now(), user: 'System', message: 'Chat history cleared.', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), isSystem: true }])}
            title="Clear Chat"
            className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/60 hover:text-red-400 hover:bg-red-500/10 transition-all border border-white/5"
          >
            <FiTrash2 className="text-lg" />
          </button>
          
          {onClose && (
            <button onClick={onClose} className="lg:hidden w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-all border border-white/5">
              <FiX />
            </button>
          )}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 custom-scrollbar bg-gray-50/50">
        <AnimatePresence>
          {chatLog.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex flex-col gap-2 ${msg.isSystem ? 'items-center text-center my-2' : ''}`}
            >
              {msg.isSystem ? (
                <span className="px-4 py-1.5 bg-gray-100 text-[9px] uppercase font-black tracking-[0.2em] text-gray-500 rounded-full border border-gray-200 shadow-sm">
                  {msg.message}
                </span>
              ) : (
                <div className={`flex flex-col gap-1 ${msg.user === user ? 'items-end' : 'items-start'}`}>
                  <div className="flex items-center gap-2 mb-1 px-1">
                    <span className={`text-[10px] font-black uppercase tracking-widest ${msg.isInstructor ? 'text-primary' : 'text-gray-400'}`}>
                      {msg.user}
                    </span>
                    <span className="text-[9px] text-gray-300 font-bold">{msg.time}</span>
                  </div>
                  <div className={`max-w-[85%] px-5 py-3 rounded-[1.5rem] text-sm font-bold tracking-tight shadow-md ${
                    msg.user === user 
                    ? 'bg-primary text-white rounded-tr-none' 
                    : msg.isInstructor 
                      ? 'bg-gray-900 text-white rounded-tl-none' 
                      : 'bg-white text-gray-700 border border-gray-100 rounded-tl-none'
                  }`}>
                    {msg.message}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
          
          {/* Optimized Typing Indicator */}
          {typingUsers.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 5 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="flex items-center gap-3 bg-primary/5 backdrop-blur-md border border-primary/10 px-4 py-2 rounded-2xl w-fit ml-2 mb-4 shadow-sm"
            >
              <div className="flex gap-1.5">
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-duration:0.6s]"></span>
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-duration:0.6s] [animation-delay:0.15s]"></span>
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-duration:0.6s] [animation-delay:0.3s]"></span>
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-primary/80">
                {typingUsers.length > 1 ? 'Multiple users typing...' : `${typingUsers[0]} is typing...`}
              </span>
            </motion.div>
          )}
          <div ref={chatEndRef} />
        </AnimatePresence>
      </div>

      {/* Premium Input Section */}
      <form onSubmit={handleSendMessage} className="p-6 bg-white border-t border-gray-100 shadow-[0_-15px_50px_rgba(0,0,0,0.05)]">
        <div className="relative group">
          <input
            type="text"
            value={message}
            onChange={handleTyping}
            placeholder="Type your message here..."
            className="w-full pl-7 pr-16 py-5 bg-gray-50/50 border-2 border-transparent rounded-[2rem] text-base font-bold text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary focus:bg-white transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] outline-none"
          />
          <button
            type="submit"
            disabled={!message.trim()}
            className="absolute right-2 top-2 bottom-2 px-6 bg-primary text-white rounded-2xl shadow-xl shadow-primary/30 hover:shadow-primary/50 transition-all flex items-center justify-center disabled:opacity-50 disabled:grayscale disabled:shadow-none enabled:active:scale-95"
          >
            <FiSend className="text-xl" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatPanel;
