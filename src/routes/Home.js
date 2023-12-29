import '../App.css';
import FormLogin from '../components/FormLogin';
import ImagemLogin from '../components/ImagemLogin';

function Home() {
  return (
    <div className='App'>
      <div className='App-header'>
        <ImagemLogin></ImagemLogin>
        <FormLogin></FormLogin>
      </div>
    </div>
  );
}

export default Home;
