import axios from "axios"

const pedidosAPI = axios.create({baseURL: "http://localhost:8000/pedidos"})

async function getPedidos() {
    
    try{
    const response = await pedidosAPI.get('/');
    
    return response;
    }catch(error){
        console.log(error);
    }
}

export {
    getPedidos
}