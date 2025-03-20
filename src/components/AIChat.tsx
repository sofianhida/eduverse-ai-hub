
import { useState, useRef, useEffect } from 'react';
import { SendHorizontal, Loader2, Bot, User, Trash, Download } from 'lucide-react';
import { useGeminiAI } from '../utils/geminiAI';

type Message = {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
};

type AIChatProps = {
  initialSystemPrompt?: string;
  placeholder?: string;
  chatTitle?: string;
};

const AIChat = ({ 
  initialSystemPrompt = "Kamu adalah asisten AI pendidikan yang membantu siswa belajar. Berikan jawaban yang ringkas, jelas, dan sesuai dengan kurikulum pendidikan Indonesia.",
  placeholder = "Tanyakan sesuatu...",
  chatTitle = "AI Tutor"
}: AIChatProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { sendMessage } = useGeminiAI();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (inputValue.trim() === '') return;
    
    // Add user message
    const userMessage: Message = {
      role: 'user',
      content: inputValue,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    
    try {
      // Send to Gemini AI
      const response = await sendMessage(inputValue, initialSystemPrompt);
      
      // Add AI response
      const assistantMessage: Message = {
        role: 'assistant',
        content: response,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error getting AI response:', error);
      
      // Add error message
      const errorMessage: Message = {
        role: 'assistant',
        content: 'Maaf, terjadi kesalahan saat memproses pesan Anda. Silakan coba lagi nanti.',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearChat = () => {
    setMessages([]);
  };

  const downloadChat = () => {
    const chatContent = messages.map(msg => 
      `[${msg.role === 'user' ? 'Saya' : 'AI'}] ${msg.timestamp.toLocaleString()}:\n${msg.content}\n`
    ).join('\n');
    
    const blob = new Blob([chatContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${chatTitle.replace(/\s+/g, '-').toLowerCase()}-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col h-full rounded-xl border border-edu-primary/10 bg-white shadow-medium overflow-hidden">
      {/* Chat Header */}
      <div className="p-4 border-b border-edu-primary/10 flex justify-between items-center bg-edu-light">
        <div className="flex items-center space-x-2">
          <Bot className="w-5 h-5 text-edu-primary" />
          <h3 className="font-medium">{chatTitle}</h3>
        </div>
        <div className="flex space-x-2">
          <button 
            onClick={clearChat}
            className="p-2 rounded-full hover:bg-edu-primary/10 transition-colors"
            title="Bersihkan percakapan"
          >
            <Trash className="w-4 h-4 text-edu-primary/70" />
          </button>
          <button 
            onClick={downloadChat}
            className="p-2 rounded-full hover:bg-edu-primary/10 transition-colors"
            title="Unduh percakapan"
          >
            <Download className="w-4 h-4 text-edu-primary/70" />
          </button>
        </div>
      </div>
      
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-edu-gray/30">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center text-edu-dark/50 p-6">
            <Bot className="w-12 h-12 mb-3 text-edu-primary/40" />
            <p className="text-sm">Belum ada percakapan. Mulai dengan mengirim pesan.</p>
          </div>
        )}
        
        {messages.map((message, index) => (
          <div 
            key={index}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
          >
            <div 
              className={`max-w-[80%] p-3 rounded-2xl ${
                message.role === 'user' 
                  ? 'bg-edu-primary text-white rounded-tr-none' 
                  : 'bg-white border border-edu-primary/10 rounded-tl-none'
              }`}
            >
              <div className="flex items-center space-x-2 mb-1">
                {message.role === 'assistant' ? (
                  <Bot className="w-4 h-4 text-edu-primary" />
                ) : (
                  <User className="w-4 h-4 text-white" />
                )}
                <span className={`text-xs ${message.role === 'user' ? 'text-white/80' : 'text-edu-dark/50'}`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
              <p className="whitespace-pre-wrap text-sm">{message.content}</p>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start animate-fade-in">
            <div className="max-w-[80%] p-3 rounded-2xl bg-white border border-edu-primary/10 rounded-tl-none">
              <div className="flex items-center space-x-2">
                <Bot className="w-4 h-4 text-edu-primary" />
                <Loader2 className="w-4 h-4 text-edu-primary animate-spin" />
                <span className="text-xs text-edu-dark/50">AI sedang mengetik...</span>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      {/* Chat Input */}
      <div className="p-4 border-t border-edu-primary/10 bg-white">
        <div className="flex items-center rounded-full border border-edu-primary/20 bg-white overflow-hidden focus-within:ring-2 focus-within:ring-edu-primary/20 transition-all">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className="flex-1 py-3 px-4 focus:outline-none text-sm"
            disabled={isLoading}
          />
          <button
            onClick={handleSendMessage}
            className="px-4 py-3 text-edu-primary hover:text-edu-primary/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={inputValue.trim() === '' || isLoading}
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <SendHorizontal className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIChat;
