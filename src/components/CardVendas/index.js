import './style.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

function Vendas(){

    const [pedidosVendas, setPedidosVendas] = useState([])

    useEffect(() =>{

        axios.get('http://localhost:8000/pedidos/totalVendas/')
          .then(response => {
            setPedidosVendas(response.data)
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
      }, [])

    return(
        <div className="card-vendas">
            <h1>Total de Vendas</h1>
            <span>R$1320,00</span>
        </div>
    )

}

export default Vendas