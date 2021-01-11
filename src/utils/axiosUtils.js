import axios from 'axios';

const axiosConfig = {
    baseURL: 'https://5fe220547a9487001768215e.mockapi.io/api/v1',
    withCredentials: false,
    crossDomain: true,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },
};

const Axios = axios.create(axiosConfig);

export {
    axiosConfig,
    Axios,
};