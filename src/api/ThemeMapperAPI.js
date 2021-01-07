import axios from 'axios';


export default function useThemeMap() {

    async function getThemes() {
        console.log('[TMAP] Fetching themes...');
        return (await axios.get('http://localhost:1234/getThemes')).data;
    }

    return [getThemes];
};
