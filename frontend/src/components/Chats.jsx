import React, { useState, useRef } from "react";

const Chats = ({ isVisible, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const chatContainerRef = useRef(null);

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    // Add the new message to the messages array
    setMessages((prevMessages) => [...prevMessages, { sender: "You", text: newMessage }]);
    setNewMessage("");

    // Auto-scroll to the bottom of the chat
    setTimeout(() => {
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
      }
    }, 100);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-[30px] right-0 w-[300px] h-[400px] bg-white rounded-t-lg shadow-lg z-50">
      {/* Chatbox Header */}
      <div className="flex items-center justify-between bg-blue-600 text-white px-4 py-2 rounded-t-lg">
        <h3 className="text-lg font-bold">Chatbox</h3>
        <button
          onClick={onClose}
          className="text-white text-xl focus:outline-none hover:text-gray-300"
          aria-label="Close Chatbox"
        >
          &times;
        </button>
      </div>

      {/* Chat Messages */}
      <div
        className="flex flex-col gap-2 p-4 overflow-y-auto h-[300px] bg-gray-100"
        ref={chatContainerRef}
      >
        {messages.length === 0 ? (
          <div className="text-gray-500 text-center">No messages yet. Start the conversation!</div>
        ) : (
          messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.sender === "You" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-3 py-2 rounded-lg max-w-[70%] ${
                  message.sender === "You" ? "bg-blue-500 text-white" : "bg-gray-300 text-black"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Message Input */}
      <div className="flex items-center gap-2 px-4 py-2 border-t border-gray-300">
        <input
          type="text"
          className="flex-grow px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chats;
