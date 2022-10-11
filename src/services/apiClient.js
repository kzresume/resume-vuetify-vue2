import axios from "axios";

const apiClient=axios.create({
    baseURL: 'http://api.nbp.pl/api/exchangerates/tables/A/today',
    timeout: 1000,
    headers: {},
    params: { format: 'json' } 
  });

export default apiClient;