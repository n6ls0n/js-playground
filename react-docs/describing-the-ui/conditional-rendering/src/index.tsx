import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Import the App component

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container); // createRoot instead of ReactDOM.render
  root.render(<App />);
}
