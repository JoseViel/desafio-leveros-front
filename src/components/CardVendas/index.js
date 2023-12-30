import './style.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

function Vendas(){

    const [totalVendas, setPedidosVendas] = useState([])

    const getVendas = async() => {

        try{
            
            const response = await axios.get('http://localhost:8000/pedidos/totalVendas/')

            const data = response.data

            setPedidosVendas(data)

        } catch(error){

            console.log(error)

        }

    }

    useEffect(() =>{
    
        getVendas()

    }, [])

    return(
        <div className="card-vendas">
            <h1>Total de Vendas</h1>
            <span>R${totalVendas.totalVendas}</span>
        </div>
    )

}

export default Vendas