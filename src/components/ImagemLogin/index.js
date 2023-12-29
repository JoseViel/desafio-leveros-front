import imagem from '../../images/fundo-tela-login.png'
import logo from '../../images/logoNegative1.png'
import './style.css'

function ImagemLogin() {
    return (
        <div className='imagem-login'>
            <img src={logo} alt='logo' className='imagem-login-logo'></img>
            <img src={imagem} alt='logo' className='imagem-login-fundo'></img>
        </div>
    )
}

export default ImagemLogin;