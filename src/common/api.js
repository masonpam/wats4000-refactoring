//Base API configuration

import axios from 'axios';

export const API = axios.create({
    baseURL: '//api.openweathermap.org/data/2.5/'
});

API.interceptors.request.use(function (config) {
    //Set common parameters for each request to the API.
    config.params.APPID = '6ce84660897436c05319f24183b844bc';
    config.params.units = 'imperial';
    
    return config; 
}, function (error) {
    return Promise.reject(error);
});