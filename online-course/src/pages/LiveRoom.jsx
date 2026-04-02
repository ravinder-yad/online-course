import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { FiMic, FiMicOff, FiVideo, FiVideoOff, FiMonitor, FiLogOut, FiUsers, FiMessageSquare, FiSettings, FiX, FiMaximize } from 'react-icons/fi';
import { FaHandPaper } from 'react-icons/fa';
import ChatPanel from '../components/live/ChatPanel';

const LiveRoom = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [isSharing, setIsSharing] = useState(false);
  const [hasRaisedHand, setHasRaisedHand] = useState(false);
  const [showChat, setShowChat] = useState(window.innerWidth > 1024);
  const [showParticipants, setShowParticipants] = useState(window.innerWidth > 768);
  
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  const [participants] = useState([
    { name: 'Dr. Angela Yu', role: 'Instructor', avatar: 'https://i.pravatar.cc/100?img=32', isMe: false },
    { name: 'You (Student)', role: 'Student', avatar: 'https://i.pravatar.cc/100?img=12', isMe: true },
    { name: 'Alex Johnson', role: 'Student', avatar: 'https://i.pravatar.cc/100?img=1', isMe: false },
    { name: 'Maria Garcia', role: 'Student', avatar: 'https://i.pravatar.cc/100?img=26', isMe: false }
  ]);

  // Webcam Logic
  useEffect(() => {
    async function startCamera() {
      if (!isVideoOff) {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
          streamRef.current = stream;
        } catch (err) {
          console.error("Error accessing webcam:", err);
          setIsVideoOff(true);
        }
      } else {
        if (streamRef.current) {
          streamRef.current.getTracks().forEach(track => track.stop());
        }
      }
    }
    startCamera();
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, [isVideoOff]);

  return (
    <div className="h-screen bg-[#0F172A] flex flex-col overflow-hidden text-white font-sans selection:bg-primary selection:text-white">
      {/* Top Header - Distraction Free */}
      <div className="px-6 lg:px-12 py-4 bg-gray-900 border-b border-white/5 flex items-center justify-between z-50">
        <div className="flex items-center gap-4">
           <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-red-500 flex items-center justify-center text-white shadow-lg animate-pulse"><FiVideo className="text-sm"/></div>
              <h2 className="text-lg font-black tracking-tighter uppercase">{id.replace(/-/g, ' ')} <span className="text-primary-light">Masterclass</span></h2>
           </div>
        </div>
        <div className="flex items-center gap-3 lg:gap-8">
           <div className="hidden lg:flex items-center gap-4 px-6 border-x border-white/10">
              <div className="flex -space-x-3">
                 {participants.map((p, i) => (
                   <img key={i} src={p.avatar} alt={p.name} className="w-8 h-8 rounded-full border-2 border-gray-900" />
                 ))}
              </div>
              <p className="text-xs font-black uppercase text-white/40 tracking-widest">{participants.length + 12} Online</p>
           </div>
           <button 
             onClick={() => navigate('/live')}
             className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-2xl text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2 border border-white/10 shadow-2xl active:scale-95"
           >
              Exit Class
           </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Video Stage (Left) */}
        <div className={`flex-1 relative bg-black flex items-center justify-center transition-all duration-700 ease-in-out ${
          showChat && window.innerWidth > 1024 ? 'lg:mr-[400px]' : ''
        }`}>
           {/* Instructor Video (Mock) */}
           <div className="w-full h-full relative group">
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
                alt="Instructor Stage" 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-black/20"></div>
              
              {/* Top Information Overlay */}
              <div className="absolute top-6 left-6 flex flex-col gap-2 z-20">
                 <div className="flex items-center gap-2 px-3 py-1 bg-black/40 backdrop-blur-md rounded-lg border border-white/10">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-ping"></div>
                    <span className="text-[10px] font-black uppercase tracking-widest">Recording</span>
                 </div>
              </div>

              {/* Bottom Label Overlay */}
              <div className="absolute bottom-8 left-8 p-5 lg:p-6 glass rounded-[2rem] flex items-center gap-4 lg:gap-6 border-white/5 shadow-2xl z-20">
                 <div className="w-12 lg:w-16 h-12 lg:h-16 rounded-2xl border-2 border-primary/50 overflow-hidden shadow-lg">
                    <img src={participants[0].avatar} alt="Instructor" className="w-full h-full object-cover" />
                 </div>
                 <div className="text-left">
                    <p className="text-[10px] lg:text-xs font-black uppercase tracking-[0.2em] text-primary/80 mb-1">{participants[0].role}</p>
                    <p className="text-xl lg:text-2xl font-black text-white">{participants[0].name}</p>
                 </div>
              </div>

              {/* Self Camera Preview Window */}
              <AnimatePresence>
                {!isVideoOff && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 100 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 100 }}
                    className="absolute bottom-8 right-8 w-48 lg:w-72 aspect-video bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10 z-[70] group-hover:scale-105 transition-transform duration-500 ring-8 ring-black/20"
                  >
                    <video ref={videoRef} autoPlay muted playsInline className="w-full h-full object-cover" />
                    <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest text-primary border border-primary/20">You</div>
                  </motion.div>
                )}
              </AnimatePresence>
           </div>
        </div>

        {/* Chat Side Panel */}
        <AnimatePresence>
          {showChat && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full lg:w-[400px] z-[100] lg:z-40 lg:relative shadow-2xl"
            >
              <ChatPanel roomId={id} user="Alex" onClose={() => setShowChat(false)} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Control Bar (Bottom) */}
      <div className="px-6 lg:px-12 py-6 bg-gray-900 border-t border-white/5 flex items-center justify-between z-[110] relative shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
         {/* Media Devices */}
         <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsMuted(!isMuted)} 
              className={`w-12 lg:w-14 h-12 lg:h-14 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 ${isMuted ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' : 'bg-gray-800 text-white hover:bg-gray-700 border border-white/10'}`}
            >
               {isMuted ? <FiMicOff className="text-xl" /> : <FiMic className="text-xl" />}
            </button>
            <button 
              onClick={() => setIsVideoOff(!isVideoOff)} 
              className={`w-12 lg:w-14 h-12 lg:h-14 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 ${isVideoOff ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' : 'bg-gray-800 text-white hover:bg-gray-700 border border-white/10'}`}
            >
               {isVideoOff ? <FiVideoOff className="text-xl" /> : <FiVideo className="text-xl" />}
            </button>
         </div>

         {/* Center Interaction Tools */}
         <div className="flex items-center gap-8 lg:gap-16">
            <button onClick={() => setIsSharing(!isSharing)} className={`flex flex-col items-center gap-2 group transition-all ${isSharing ? 'text-primary' : 'text-white/40 hover:text-white'}`}>
               <FiMonitor className="text-2xl" />
               <span className="text-[9px] font-black uppercase tracking-widest hidden sm:block">Share</span>
            </button>
            <button onClick={() => setHasRaisedHand(!hasRaisedHand)} className={`flex flex-col items-center gap-2 group transition-all ${hasRaisedHand ? 'text-yellow-400 animate-bounce' : 'text-white/40 hover:text-white'}`}>
               <FaHandPaper className="text-2xl" />
               <span className="text-[9px] font-black uppercase tracking-widest hidden sm:block">Raise Hand</span>
            </button>
            <button onClick={() => setShowChat(!showChat)} className={`flex flex-col items-center gap-2 group transition-all lg:hidden ${showChat ? 'text-primary' : 'text-white/40'}`}>
               <FiMessageSquare className="text-2xl" />
               <span className="text-[9px] font-black uppercase tracking-widest">Chat</span>
            </button>
         </div>

         {/* Right Controls */}
         <div className="flex items-center gap-4">
            <button 
              onClick={() => setShowChat(!showChat)} 
              className={`hidden lg:flex w-12 lg:w-14 h-12 lg:h-14 rounded-2xl items-center justify-center transition-all duration-300 ${showChat ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-gray-800 text-white hover:bg-gray-700 border border-white/10'}`}
            >
               <FiMessageSquare className="text-xl" />
            </button>
            <button className="w-12 lg:w-14 h-12 lg:h-14 rounded-2xl bg-gray-800 text-white border border-white/10 flex items-center justify-center hover:bg-gray-700 transition-all">
               <FiSettings className="text-xl" />
            </button>
         </div>
      </div>
    </div>
  );
};

export default LiveRoom;
