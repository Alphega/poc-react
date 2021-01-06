import io from 'socket.io-client';
import Events from '../constants/ThemeMap';


let socket;
const socketAddr = 'localhost';
const socketPort = 1234;

export default function useThemeMap() {
    if (!socket) {
        socket = io(`ws://${socketAddr}:${socketPort}`, {});
    }

    async function getThemes() {
        console.log('[TMAP] Fetching themes...');
        socket.emit(Events.FETCH_THEMES);

        const response = new Promise((resolve) => {
            socket.on(Events.FETCH_THEMES, resolve);
        });
        const themes = await response;
        return themes;
    }

    return [getThemes];
};
