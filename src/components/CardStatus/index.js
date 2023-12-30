import './style.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

function StatusPedido(){

    const [pedidosStatus, setPedidosStatus] = useState([])

    useEffect(() =>{

        axios.get('http://localhost:8000/pedidos/resumoStatus/')
          .then(response => {
            setPedidosStatus(response.data)
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
      }, [])

    return(
        <div className="card-status">
            <h1>Status dos Pedidos</h1>
            <div className='card-status-metricas'>
                <div className='card-status-numeros'>
                    <span className='numero-amarelo'>2</span>
                    <span className='status-pedido'>Processando</span>
                </div>
                <div className='card-status-numeros'>
                    <span className='numero-azul'>5</span>
                    <span className='status-pedido'>Pendente</span>
                </div>
                <div className='card-status-numeros'>
                    <span className='numero-verde'>4</span>
                    <span className='status-pedido'>Aprovado</span>
                </div>
                <div className='card-status-numeros'>
                    <span className='numero-vermelho'>2</span>
                    <span className='status-pedido'>Cancelado</span>
                </div>
                <div className='card-status-numeros'>
                    <span className='numero-preto'>13</span>
                    <span className='status-pedido'>Total</span>
                </div>
            </div>
        </div>
    )

}

export default StatusPedido