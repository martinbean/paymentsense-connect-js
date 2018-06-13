export default class Connection {
    socket: WebSocket;

    constructor(socket: WebSocket) {
        this.socket = socket;
    }

    onMessage(callback: any) {
        this.socket.addEventListener('message', (message) => {
            callback(message);
        });
    }

    sendMessage(message: string) {
        this.socket.send(message);
    }
}
