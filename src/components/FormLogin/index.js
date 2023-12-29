import logoForm from '../../images/logoPosColor1.png'
import './style.css'
import { Link } from 'react-router-dom'; 

function FormLogin() {
    return (
        <div className='form-principal'>
            <div className='form-imagem'>
                <img src={logoForm} alt='logo'></img>
            </div>
            <div className='form-login'>
                <h1>Acesse o Painel de Monitoramento</h1>
                    <div className='form-login-form'>
                        <label className='form-login-form-label'>Email:</label>
                        <input className='form-login-form-input'></input>
                        <label className='form-login-form-label'>Senha:</label>
                        <div className='form-senha'>
                            <input type='password'></input>
                            <button className='button-show'>Show</button>
                        </div>
                    </div>
                    <Link to="/pedidos" ><button className='button-enter'>Entrar</button></Link>
            </div>
        </div>
    )
}

export default FormLogin