import './style.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

function Pedidos ({corStatus, numeroPedido, statusPedido}) {
    
    const [pedidos, setPedidos] = useState([])

    useEffect(() =>{

        axios.get('http://localhost:8000/pedidos/')
        .then(response => {
            setPedidos(response.data)
            console.log(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    const corLetra = { color: corStatus}

    return (
   
        <div className='card-principal'>
            <div className='card-pedidos'>
                <div className='card-cabecalho'>
                    <h1>Pedido</h1>
                    <button>ACESSAR</button>
                </div>
                <div className='card-body'>
                    <div className='card-infos'>
                        <span className='card-infos-key'>Número</span>
                        <span className='card-infos-value-number'>{numeroPedido}</span>
                    </div>
                    <div className='card-infos'>
                        <span className='card-infos-key'>Valor</span>
                        <span className='card-infos-value-valor'>R$120,00</span>
                    </div>
                    <div className='card-infos'>
                        <span className='card-infos-key'>Status</span>
                        <span className='card-infos-value-color' style={corLetra}>{statusPedido}</span>
                    </div> 
                </div>
            </div>
        </div>
    )
}


export {
    Pedidos}