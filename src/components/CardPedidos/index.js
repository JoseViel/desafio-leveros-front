import './style.css'

function Pedidos () {

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
                        <span className='card-infos-value-number'>100001</span>
                    </div>
                    <div className='card-infos'>
                        <span className='card-infos-key'>Valor</span>
                        <span className='card-infos-value-valor'>R$120.00</span>
                    </div>
                    <div className='card-infos'>
                        <span className='card-infos-key'>Status</span>
                        <span className='card-infos-value-color'>PROCESSANDO</span>
                    </div> 
                </div>
            </div>
        </div>
    )
}


export {Pedidos}