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
              <Pedidos></Pedidos>
            </div>
        </div>
    </div>
  );
}

export default Pedido;
