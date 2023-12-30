import './style.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

function StatusPedido(){

    const [ pedidosStatus, setPedidosStatus] = useState([])

    const getStatus = async() => {

        try{
            
            const response = await axios.get('http://localhost:8000/pedidos/resumoStatus/')

            const data = response.data

            setPedidosStatus(data)

        } catch(error){

            console.log(error)

        }

    }

    useEffect(() =>{
    
        getStatus()

    }, [])

    return(
        <div className="card-status">
            <h1>Status dos Pedidos</h1>
            <div className='card-status-metricas'>
                <div className='card-status-numeros'>
                    <span className='numero-amarelo'>{pedidosStatus.qtdStatusProcessando}</span>
                    <span className='status-pedido'>Processando</span>
                </div>
                <div className='card-status-numeros'>
                    <span className='numero-azul'>{pedidosStatus.qtdStatusPendente}</span>
                    <span className='status-pedido'>Pendente</span>
                </div>
                <div className='card-status-numeros'>
                    <span className='numero-verde'>{pedidosStatus.qtdStatusAprovado}</span>
                    <span className='status-pedido'>Aprovado</span>
                </div>
                <div className='card-status-numeros'>
                    <span className='numero-vermelho'>{pedidosStatus.qtdStatusCancelado}</span>
                    <span className='status-pedido'>Cancelado</span>
                </div>
                <div className='card-status-numeros'>
                    <span className='numero-preto'>{pedidosStatus.qtdTotalPedidos}</span>
                    <span className='status-pedido'>Total</span>
                </div>
            </div>
        </div>
    )

}

export default StatusPedido