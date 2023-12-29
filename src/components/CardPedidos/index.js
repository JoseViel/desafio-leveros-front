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
                        <span>Número</span>
                        <span>100001</span>
                    </div>
                    <div className='card-infos'>
                        <span>Valor</span>
                        <span>120.00</span>
                    </div>
                    <div className='card-infos'>
                        <span>Status</span>
                        <span>PROCESSANDO</span>
                    </div> 
                </div>
            </div>
        </div>
    )
}


export {Pedidos}