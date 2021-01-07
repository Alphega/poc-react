import axios from 'axios';


export default function useTokenApi() {
    /**
     * send single token to Websocket (UI) and to the database
     *
     * @param {Object} token - data format: {key: <String>, value: <String>} with <key> being the token's name
     */
    function setSingleToken(token = {}) {
        axios.post('http://localhost:4444/setDisplayTokenValue', {
            class: 'Theme',
            method: 'setDesignTokenValue',
            args: [token.key, token.value, ''],
            guid: 'whatisthat',
        });
    }

    /**
     * send a collection of tokens to Websocket (UI) and to the database
     *
     * @param {Array} tokens - array of token respecting the data format:
     *      {key: <String>, value: <String>} with <key> being the token's name
     */
    function setTokens(tokens = []) {
    }

    return [setSingleToken, setTokens];
};
