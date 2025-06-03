import React, { useState } from 'react';

const ChatBot = () => {
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSend = async () => {
    if (!message) return;
    
    // Send the message to your email or WhatsApp API
    await fetch('https://your-server-api/send-message', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    });

    setSubmitted(true);
  };

  return (
    <div className="fixed bottom-6 right-6 w-64 bg-white shadow-lg border rounded-lg p-4">
      <h4 className="text-md font-bold mb-2">Ask a question</h4>
      <textarea
        rows="3"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full border rounded p-2 text-sm"
        placeholder="Type your question..."
      ></textarea>
      <button
        onClick={handleSend}
        className="bg-blue-600 text-white px-3 py-1 mt-2 text-sm rounded hover:bg-blue-700"
      >
        Send
      </button>
      {submitted && <p className="text-green-600 text-xs mt-2">Sent successfully!</p>}
    </div>
  );
};

export default ChatBot;
