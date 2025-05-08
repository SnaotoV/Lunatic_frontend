// import logo from './logo.svg';
import './App.css';
import Footer from './layouts/Footer';
import Header from './layouts/Header/Header';
import Main from './layouts/Main';
import ModalCustom from './components/Modal/Modal';
import { BrowserRouter } from 'react-router';
function App() {
  return (
    <BrowserRouter>
      <div className="App main-background">
        <header className="App-header container-fluid ">
          <Header></Header>
        </header>
        <main className='container'>
          <Main></Main>
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </div>
      <ModalCustom></ModalCustom>
    </BrowserRouter>
  );
}

export default App;
