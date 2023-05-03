import axios from 'axios';

const axiosClient = axios.create();
const shopId = process.env.SHOP_ID;
const apiKey = process.env.API_KEY;

if (!shopId) throw new Error('Shop ID required');
if (!apiKey) throw new Error('API key required');

axiosClient.defaults.baseURL = `https://api.kontur.ru/market/v1/shops/${shopId}`;

axiosClient.interceptors.request.use((config) => {
  config.headers['x-kontur-apikey'] = apiKey;
  return config;
});

export default axiosClient;
