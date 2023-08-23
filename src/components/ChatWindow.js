import React, { useState } from 'react';

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = async () => {
    if (inputValue.trim() !== '') {
      const userMessage = {
        content: inputValue,
        sender: 'user',
      };

      setMessages((prevMessages) => [...prevMessages?.slice(-1), userMessage]);
      setInputValue('');

      try {
        const response = await fetch('https://sofiyana-chat.onrender.com/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ "user_chat": inputValue }),
        });

        if (response.ok) {
          const data = await response.json();
          const chatbotResponse = data.response;
          const tag = data.tag;

          const botMessage = {
            content: chatbotResponse,
            sender: 'chatbot',
          };

          setMessages((prevMessages) => [...prevMessages.slice(-1), botMessage]);
        } else {
          console.error('Request failed with status', response.status);
        }
      } catch (error) {
        console.error('Error occurred during request:', error);
      }
    }
  };

  const handleKeyDown = async (event) => {
    if (event.key === 'Enter') {
      if (inputValue.trim() !== '') {
        const userMessage = {
          content: inputValue,
          sender: 'user',
        };
  
        setMessages((prevMessages) => [...prevMessages?.slice(-1), userMessage]);
        setInputValue('');
  
        try {
          const response = await fetch('https://sofiyana-chat.onrender.com/chat', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "user_chat": inputValue }),
          });
  
          if (response.ok) {
            const data = await response.json();
            const chatbotResponse = data.response;
            const tag = data.tag;
  
            const botMessage = {
              content: chatbotResponse,
              sender: 'chatbot',
            };
  
            setMessages((prevMessages) => [...prevMessages.slice(-1), botMessage]);
          } else {
            console.error('Request failed with status', response.status);
          }
        } catch (error) {
          console.error('Error occurred during request:', error);
        }
      }
    }
  };

  return (
    <div className="h-fit w-3/4 mx-auto font-medium text-sm flex flex-col gap-1">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`flex relative overflow-hidden flex-grow  rounded-lg border border-[#2B0C7D] py-4 pr-4 pl-6 ${
            message.sender === 'chatbot' ? 'bg-[#F8EAFF]' : 'bg-white'
          }`}
        >
          {message.sender === 'chatbot' && <div className="absolute top-0 bottom-0 left-0 w-[10px] self-stretch bg-[#9E4EC3]"></div>}
          <span>
            {message.content}
          </span>
        </div>
      ))}
      <div className="flex bg-white rounded-lg border border-[#2B0C7D]">
        <input
          type="text"
          className="flex-grow border-none rounded-l-md pl-4 bg-inherit outline-none placeholder-[#2B0B7D99]"
          placeholder="Interact with Sofiyana here"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button
          className="text-white rounded-r-md pr-4 pl-2 py-2"
          onClick={handleSendMessage}
        >
          <svg className="fill-[#2B0C7D] scale-75" width="40" height="40" viewBox="0 0 24 24">
            <path d="M3 20V4l19 8l-19 8Zm2-3l11.85-5L5 7v3.5l6 1.5l-6 1.5V17Zm0 0V7v10Z"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
