import axios from 'axios';


export default function useTokenApi() {
    /**
     * send single token to Websocket (UI) and to the database
     *
     * @param {Object} token - data format: {key: <String>, value: <String>} with <key> being the token's name
     */
    function setSingleToken(token = {}) {
        console.log('update single token', {
            class: 'Theme',
            method: 'setDesignTokenValue',
            args: [token.key, token.value, ''],
            themeId: token.themeId
        });
        axios.post('http://localhost:1234/setDisplayTokenValue', {
            class: 'Theme',
            method: 'setDesignTokenValue',
            args: [token.key, token.value, ''],
            themeId: token.themeId
        });
    }

    /**
     * send a collection of tokens to Websocket (UI) and to the database
     *
     * @param {Array} tokens - array of token respecting the data format:
     *      {key: <String>, value: <String>} with <key> being the token's name
     */
    function setTokens({ cpe, tokens = [] }) {
        console.log('update tokens');
        axios.post('http://localhost:1234/setTokens', {
            cpe,
            tokens
        });
    }

    return { setSingleToken, setTokens };
};
