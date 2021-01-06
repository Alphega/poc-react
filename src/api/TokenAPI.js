import { w3cwebsocket as W3CWebSocket } from 'websocket';


let socket;
const socketAddr = 'localhost';
const socketPort = 9666;
const socketUrl = `ws://${socketAddr}:${socketPort}?wtvChromeExt=true`;

export default function useTokenApi() {
    if (!socket) {
        socket = new W3CWebSocket(socketUrl);
        socket.onopen = () => console.log(`[WS] Websocket opened! [${socketUrl}]`);
        socket.onError = error => console.error(`[WS] WebSocket error: ${JSON.stringify(error)}`);
    }

    function close() {
        socket.close();
    }

    /**
     * send single token to Websocket (UI) and to the database
     *
     * @param {Object} token - data format: {key: <String>, value: <String>} with <key> being the token's name
     */
    function setSingleToken(token = {}) {
        if (!socket) { throw new Error('[WS] no socket opened'); }

        if (Object.keys(token).length) {
            console.log('[API] send data:', token);
            const data = {
                class: 'Theme',
                method: 'setDesignTokenValue',
                args: [token.key, token.value, ''],
                guid: 'whatisthat',
            };
            socket.send(JSON.stringify(data));
        }
    }

    /**
     * send a collection of tokens to Websocket (UI) and to the database
     *
     * @param {Array} tokens - array of token respecting the data format:
     *      {key: <String>, value: <String>} with <key> being the token's name
     */
    function setTokens(tokens = []) {
        if (!socket) { throw new Error('[WS] no socket opened'); }

        if (tokens.length) {
            socket.send(JSON.stringify(tokens));
        }
    }

    return [setSingleToken, setTokens, close];
};
