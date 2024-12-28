import { io } from 'socket.io-client';

document.addEventListener('DOMContentLoaded', () => {
    const socket = io('https://localhost:3000'); // Replace with your server URL

    console.log('Socket.IO client initialized');

    socket.on('connect', () => {
      console.log('Connected to server');
    });
  });
