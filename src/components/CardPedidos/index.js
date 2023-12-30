import './style.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

function Pedidos () {
    
    const [ pedidos, setPedidos] = useState([])

    const getPedidos = async() => {

        try{
            
            const response = await axios.get('http://localhost:8000/pedidos/')

            const data = response.data

            setPedidos(data)

        } catch(error){

            console.log(error)

        }

    }

    useEffect(() =>{
    
        getPedidos()

    }, [])

    return (
   
        (pedidos.map((pedido) => (

        
        
        <div className='card-principal' key={pedido.id}>
            <div className='card-pedidos'>
                <div className='card-cabecalho'>
                    <h1>Pedido</h1>
                    <button>ACESSAR</button>
                </div>
                <div className='card-body'>
                    <div className='card-infos'>
                        <span className='card-infos-key'>Número</span>
                        <span className='card-infos-value-number'>{pedido.numero}</span>
                    </div>
                    <div className='card-infos'>
                        <span className='card-infos-key'>Valor</span>
                        <span className='card-infos-value-valor'>R${pedido.valor}</span>
                    </div>
                    <div className='card-infos'>
                        <span className='card-infos-key'>Status</span>
                        <span className='card-infos-value-color'>{pedido.status}</span>
                    </div> 
                </div>
            </div>
        </div>
        
        )))
    )
}


export {
    Pedidos}