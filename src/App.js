import { Component } from 'react';
import Productos from './components/Productos';
import Layout from './components/Layout';
import Title from './components/Title';
import Navbar from './components/Navbar';
import './css/App.css';

class App extends Component {
  state = {
    products: [
      { name : 'Mora', price: 1700, sol: 76, img: '/productos/mora.png' },
      { name : 'Bad Bunny', price: 2000, sol: 90, img: '/productos/badbunny.png' },
      { name : 'Rauw Alejandro', price: 1500, sol: 67, img: '/productos/rauw.png' },
      { name : 'Feid', price: 1900, sol: 85, img: '/productos/feid.png' },
      { name : 'Jhay Cortez', price: 2000, sol: 90, img: '/productos/jhaycortez.png' },
      { name : 'Christekia', price: 1700, sol: 67, img: '/productos/christekia.png' },
    ],
  }

  render() {
    return (
      <div className='page_B'>
        <div className='container'>
          <div className='particles'>
            <span style={{ "--i": 11 }}></span>
            <span style={{ "--i": 15 }}></span>
            <span style={{ "--i": 19 }}></span>
            <span style={{ "--i": 13 }}></span>
            <span style={{ "--i": 22 }}></span>
            <span style={{ "--i": 31 }}></span>
            <span style={{ "--i": 25 }}></span>
            <span style={{ "--i": 17 }}></span>
            <span style={{ "--i": 26 }}></span>
            <span style={{ "--i": 19 }}></span>
            <span style={{ "--i": 9 }}></span>
            <span style={{ "--i": 39 }}></span>
            <span style={{ "--i": 27 }}></span>
            <span style={{ "--i": 17 }}></span>
            <span style={{ "--i": 24 }}></span>
            <span style={{ "--i": 31 }}></span>
            <span style={{ "--i": 41 }}></span>
            <span style={{ "--i": 15 }}></span>
            <span style={{ "--i": 27 }}></span>
            <span style={{ "--i": 21 }}></span>
            <span style={{ "--i": 9 }}></span>
            <span style={{ "--i": 36 }}></span>
            <span style={{ "--i": 21 }}></span>
            <span style={{ "--i": 16 }}></span>
            <span style={{ "--i": 32 }}></span>
            <span style={{ "--i": 11 }}></span>
            <span style={{ "--i": 23 }}></span>
            <span style={{ "--i": 10 }}></span>
            <span style={{ "--i": 15 }}></span>
            <span style={{ "--i": 23 }}></span>
            <span style={{ "--i": 29 }}></span>
            <span style={{ "--i": 16 }}></span>
            <span style={{ "--i": 36 }}></span>
            <span style={{ "--i": 27 }}></span>
            <span style={{ "--i": 21 }}></span>
            <span style={{ "--i": 31 }}></span>
            <span style={{ "--i": 12 }}></span>
            <span style={{ "--i": 24 }}></span>
            <span style={{ "--i": 32 }}></span>
            <span style={{ "--i": 14 }}></span>
            <span style={{ "--i": 24 }}></span>
            <span style={{ "--i": 15 }}></span>
            <span style={{ "--i": 35 }}></span>
            <span style={{ "--i": 21 }}></span>
            <span style={{ "--i": 25 }}></span>
            <span style={{ "--i": 11 }}></span>
            <span style={{ "--i": 18 }}></span>
            <span style={{ "--i": 25 }}></span>
            <span style={{ "--i": 31 }}></span>
            <span style={{ "--i": 28 }}></span>
            <span style={{ "--i": 34 }}></span>
            <span style={{ "--i": 16 }}></span>
            <span style={{ "--i": 7 }}></span>
            <span style={{ "--i": 25 }}></span>
            <span style={{ "--i": 19 }}></span>
            <span style={{ "--i": 31 }}></span>
            <span style={{ "--i": 11 }}></span>
            <span style={{ "--i": 32 }}></span>
            <span style={{ "--i": 26 }}></span>
            <span style={{ "--i": 6 }}></span>
            <span style={{ "--i": 18 }}></span>
            <span style={{ "--i": 26 }}></span>
          </div>
          <Navbar/>
          <Layout>
            <Title />
            <Productos
              productos={this.state.products}
            />
          </Layout>
        </div>
        
      </div>
    );
  }
}

export default App;
