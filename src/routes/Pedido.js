import '../App.css';
import Logo from '../components/Logo'
import { Pedidos } from '../components/CardPedidos'
import Vendas from '../components/CardVendas'
import Status from '../components/CardStatus';

function Pedido() {

  return (
    <div className='App-Pedidos'>
      <header></header>
        <Logo></Logo>
        <div className='App-geral'>
          <div className='App-Metricas'>
            <Status></Status>
            <Vendas></Vendas>
          </div>
            <div className='App-pedidos'>
              <Pedidos numeroPedido={100001} statusPedido={'APROVADO'} corStatus={'#002D32'}></Pedidos>
              <Pedidos numeroPedido={100002} statusPedido={'APROVADO'} corStatus={'#002D32'}></Pedidos>
              <Pedidos numeroPedido={100003} statusPedido={'APROVADO'} corStatus={'#002D32'}></Pedidos>
              <Pedidos numeroPedido={100004} statusPedido={'APROVADO'} corStatus={'#002D32'}></Pedidos>
              <Pedidos numeroPedido={100005} statusPedido={'PENDENTE'} corStatus={'#2993CE'}></Pedidos>
              <Pedidos numeroPedido={100006} statusPedido={'PENDENTE'} corStatus={'#2993CE'}></Pedidos>
              <Pedidos numeroPedido={100007} statusPedido={'PENDENTE'} corStatus={'#2993CE'}></Pedidos>
              <Pedidos numeroPedido={100008} statusPedido={'PENDENTE'} corStatus={'#2993CE'}></Pedidos>
              <Pedidos numeroPedido={100009} statusPedido={'PROCESSANDO'} corStatus={'#FFCE00'}></Pedidos>
              <Pedidos numeroPedido={1000010} statusPedido={'PENDENTE'} corStatus={'#2993CE'}></Pedidos>
              <Pedidos numeroPedido={1000011} statusPedido={'PROCESSANDO'} corStatus={'#FFCE00'}></Pedidos>
              <Pedidos numeroPedido={1000012} statusPedido={'CANCELADO'} corStatus={'#C73939'}></Pedidos>
              <Pedidos numeroPedido={1000013} statusPedido={'CANCELADO'} corStatus={'#C73939'}></Pedidos>
            </div>
        </div>
    </div>
  );
}

export default Pedido;
