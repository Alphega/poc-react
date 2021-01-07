import axios from 'axios';


export default function useCustomerApi() {

    async function getCustomers() {
        return (await axios.get('http://localhost:1234/getCustomers')).data;
    }

    return { getCustomers };
};
