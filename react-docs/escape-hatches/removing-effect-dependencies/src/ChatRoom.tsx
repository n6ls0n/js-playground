import { useEffect } from 'react';
import { createConnection } from './chat';

interface ChatRoomOptions {
  roomId: string;
  serverUrl: string;
}

export default function ChatRoom({ options }: { options: ChatRoomOptions }) {
  const { roomId, serverUrl } = options;
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId, serverUrl]);

  return <h1>Welcome to the {options.roomId} room!</h1>;
}
