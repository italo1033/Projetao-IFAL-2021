import axios from "axios";

{/*O trecho de código da linha 6 a 8 está relacionado a criar uma baseURL 
para não precisarmos digitar em cada requisição o endereço do servidor, 
informando apenas a rota.*/}
const api = axios.create({
  baseURL: "https://api.adviceslip.com", //aqui será substituido pelo nosso codigo
});

export default api;