interface Connection {
    connect(): void;
    disconnect(): void;
}

export function sendMessage(message: string): void {
    console.log('🔵 You sent: ' + message);
}

export function createConnection(serverUrl: string, roomId: string): Connection {
    // A real implementation would actually connect to the server
    return {
        connect() {
            console.log('✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...');
        },
        disconnect() {
            console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
        }
    };
}

