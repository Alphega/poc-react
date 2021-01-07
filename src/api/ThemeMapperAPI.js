import axios from 'axios';


export default function useThemeMap() {

    async function getThemes() {
        console.log('[TMAP] Fetching themes...');
        return (await axios.get('http://localhost:1234/getThemes')).data;
    }

    function updateCustomerTheme({ cpe, id }) {
        console.log('[TMAP] Updating customer theme', cpe, id);
        axios.post('http://localhost:1234/setCustomerTheme', { cpe, id });
    }

    return { getThemes, updateCustomerTheme };
};
