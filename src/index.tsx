import React from 'react';
import { createRoot } from 'react-dom/client';

const App: React.FC = () => {
  return <h1>Hello, TypeScript React!</h1>;
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container); // createRoot instead of ReactDOM.render
  root.render(<App />);
}
