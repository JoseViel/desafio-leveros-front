import logo from '../../images/logoNegative1.png'
import './style.css'
import { Link } from 'react-router-dom'; 

function Logo() {
    return (
        <div className='logo'>
            <img src={logo} alt='logo'></img>
                <h1>MONITORAMENTO DE PEDIDOS</h1>
                    <div className='cabecalho-botao'>
                        <Link to="/" ><button>SAIR</button></Link>
                    </div>
        </div>
    )
}

export default Logo;