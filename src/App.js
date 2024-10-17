import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import './App.css';

const socket = io('http://localhost:3001');

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [lastMessage, setLastMessage] = useState(null);

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
      console.log('Connected to server');
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
      console.log('Disconnected from server');
    });

    socket.on('message', (message) => {
      console.log('Received message:', message);
      setLastMessage(message);
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('message');
    };
  }, []);

  const sendMessage = () => {
    socket.emit('message', 'Hello from client!');
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Connected: {'' + isConnected}</p>
        <p>Last message: {lastMessage || '-'}</p>
        <button onClick={sendMessage}>Send Message</button>
      </header>
    </div>
  );
}

export default App;