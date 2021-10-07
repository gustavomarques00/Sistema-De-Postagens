import axios from 'axios';

const api = axios.create({
  baseURL: 'segware-book-api.segware.io/api'
})

api.interceptors.request.use(async config => {
    const token = "ConfiguracaoAPI";
  
    if (token) {
      api.defaults.headers.authorization = `Bearer ${token}`;
    }
  
    return config;
  });


export const busca = async(url, setDado) => { 
  const resposta = await api.get(url)
  setDado(resposta.data)
}

export default api;
