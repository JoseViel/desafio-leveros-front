import '../App.css';
import Logo from '../components/Logo'
import { Pedidos } from '../components/CardPedidos'
import Vendas from '../components/CardVendas'
import Status from '../components/CardStatus';

const dataSet = [{"id":"1","numero":"100001","valor":"120.00","status":"APROVADO"},
                 {"id":"2","numero":"100002","valor":"120.00","status":"APROVADO"},
                 {"id":"3","numero":"100003","valor":"120.00","status":"APROVADO"},
                 {"id":"4","numero":"100004","valor":"120.00","status":"APROVADO"},
                 {"id":"5","numero":"100005","valor":"120.00","status":"PENDENTE"},
                 {"id":"6","numero":"100006","valor":"120.00","status":"PENDENTE"},
                 {"id":"7","numero":"100007","valor":"120.00","status":"PENDENTE"},
                 {"id":"8","numero":"100008","valor":"120.00","status":"PENDENTE"},
                 {"id":"9","numero":"100009","valor":"120.00","status":"PROCESSANDO"},
                 {"id":"10","numero":"100010","valor":"120.00","status":"PENDENTE"},
                 {"id":"11","numero":"100011","valor":"120.00","status":"PROCESSANDO"},
                 {"id":"12","numero":"100012","valor":"120.00","status":"CANCELADO"},
                 {"id":"13","numero":"100013","valor":"120.00","status":"CANCELADO"}]

function Pedido() {
  return (
    <div className='App'>
      <header></header>
        <Logo></Logo>
        <div className='App-geral'>
          <div className='App-Metricas'>
            <Status></Status>
            <Vendas></Vendas>
          </div>
            <div className='App-pedidos'>
              <Pedidos></Pedidos>
              <Pedidos></Pedidos>
              <Pedidos></Pedidos>
              <Pedidos></Pedidos>
              <Pedidos></Pedidos>
              <Pedidos></Pedidos>
              <Pedidos></Pedidos>
              <Pedidos></Pedidos>
              <Pedidos></Pedidos>
              <Pedidos></Pedidos>
              <Pedidos></Pedidos>
              <Pedidos></Pedidos>
              <Pedidos></Pedidos>
              <cardList dataSet={dataSet}/>
            </div>
        </div>
    </div>
  );
}

export default Pedido;
