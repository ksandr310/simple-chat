const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8081 }, () =>
    console.log('Server running on port 8081!')
);

const users = new Set();

server.on('connection', (socket) => {
    const userRef = {
        socket,
    };
    users.add(userRef);

    socket.on('message', (message) => {
        // 1. When a message is received...
        try {
            // 2. ...attempt to parse it,
            const parsedMessage = JSON.parse(message);

            // 3. then ensure that it is a valid message,
            if (
                typeof parsedMessage.sender !== 'string' ||
                typeof parsedMessage.body !== 'string'
            ) {
                console.error('Invalid message received!', message);
                return;
            }

            // 4. and if it is, send it!
            const verifiedMessage = {
                sender: parsedMessage.sender,
                body: parsedMessage.body,
                sentAt: Date.now(),
            };

            sendMessage(verifiedMessage);
        } catch (error) {
            // If the message wasn't valid JSON, JSON.parse would throw and error, which we catch here
            console.error('Error parsing message!', error);
        }
    });
    socket.on('close', (code, reason) => {
        console.log(`User disconnected with code ${code} and ${reason}!`);
        users.delete(userRef);
    });
});

const sendMessage = (message) => {
    for (const user of users) {
        user.socket.send(JSON.stringify(message));
    }
};
