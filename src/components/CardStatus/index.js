import './style.css'

function StatusPedido(){

    return(
        <div className="card-status">
            <h1>Status dos Pedidos</h1>
            <div className='card-status-metricas'>
                <div className='card-status-numeros'>
                    <span>1</span>
                    <span>Processando</span>
                </div>
                <div className='card-status-numeros'>
                    <span>1</span>
                    <span>Pendente</span>
                </div>
                <div className='card-status-numeros'>
                    <span>1</span>
                    <span>Aprovado</span>
                </div>
                <div className='card-status-numeros'>
                    <span>1</span>
                    <span>Cancelado</span>
                </div>
                <div className='card-status-numeros'>
                    <span>1</span>
                    <span>Total</span>
                </div>
            </div>
        </div>
    )

}

export default StatusPedido