import logo from '../../images/logoNegative1.png'
import './style.css'

function ImagemLogin() {
    return (
        <div className='imagem-login'>
            <img src={logo} alt='logo' className='imagem-login-logo'></img>
        </div>
    )
}

export default ImagemLogin;