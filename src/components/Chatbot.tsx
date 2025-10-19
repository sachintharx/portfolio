import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm Hashara's AI assistant. How can I help you today?",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = inputMessage.trim();
    setInputMessage("");

    // Add user message
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyCBKin5pW_bwMYSNbjLB47WfGEosUzTCIk",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `You are Hashara Vidusanka's portfolio AI assistant. Hashara is a Computer Engineering undergraduate at University of Ruhuna, specializing in AI/ML, Deep Learning, and Computer Vision. He has 6+ months of industry experience as an AI/ML Engineering Trainee at Sri Lanka Telecom (SLT) where he developed an AI-powered chatbot for LECO using RAG architecture. His skills include TensorFlow, Keras, PyTorch, OpenCV, FastAPI, LangChain, and more. He has completed projects like Traffic Flow Clustering, Parking Spot Detection, CAPTCHA Detection, and Potato Disease Classification. Answer questions about Hashara's background, skills, projects, and experience in a friendly and professional manner. User question: ${userMessage}`,
                  },
                ],
              },
            ],
          }),
        }
      );

      const data = await response.json();

      if (data.candidates && data.candidates[0]?.content?.parts[0]?.text) {
        const assistantMessage = data.candidates[0].content.parts[0].text;
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: assistantMessage },
        ]);
      } else {
        throw new Error("Invalid response format");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I encountered an error. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-pink-500/50 hover:scale-110 transition-all duration-300 group"
        aria-label="Open chatbot"
      >
        {isOpen ? (
          <X size={28} className="group-hover:rotate-90 transition-transform" />
        ) : (
          <MessageCircle
            size={28}
            className="group-hover:scale-110 transition-transform animate-pulse"
          />
        )}
      </button>

      {/* Chatbot Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 h-[600px] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 animate-slide-in-right">
          {/* Header */}
          <div className="bg-gradient-to-r from-pink-600 to-purple-600 p-6 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">AI Assistant</h3>
                  <p className="text-xs text-white/80">Ask me about Hashara</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.role === "user"
                      ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white"
                      : "bg-white text-gray-800 shadow-md border border-gray-200"
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">
                    {message.content}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 rounded-2xl px-4 py-3 shadow-md border border-gray-200">
                  <Loader2 size={20} className="animate-spin text-pink-600" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                disabled={isLoading}
                className="flex-1 px-4 py-3 bg-gray-50 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all text-sm disabled:opacity-50"
              />
              <button
                onClick={sendMessage}
                disabled={!inputMessage.trim() || isLoading}
                className="p-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
