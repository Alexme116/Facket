import { Component } from 'react';
import Productos from './components/Productos';
import Layout from './components/Layout';
import Title from './components/Title';
import Navbar from './components/Navbar';

const styles = {
  page_B: {
    backgroundColor: 'rgba(150, 150, 150, 0.48)',
    minHeight: '100vh',
  },
}

class App extends Component {
  state = {
    products: [
      { name : 'Dios', price: 1500, img: '/productos/mora.png' },
      { name : 'Bad Bunny', price: 2000, img: '/productos/badbunny.png' },
      { name : 'Rauw Alejandro', price: 2500, img: '/productos/rauw.png' },
      { name : 'Feid', price: 1900, img: '/productos/feid.png' },
      { name : 'Jhay Cortez', price: 2000, img: '/productos/jhaycortez.png' },
      { name : 'Christekia', price: 1700, img: '/productos/christekia.png' },
    ],
    carro: [],
    esCarroVisible: false,
  }

  agregarAlCarro = (producto) => {
    const { carro } = this.state
    if (carro.find(x => x.name === producto.name)) {
      const newCarro = carro.map(x => x.name === producto.name
        ? ({
          ...x,
          cantidad: x.cantidad + 1,
        })
        : x)
      return this.setState({ carro: newCarro })
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      })
    })
  }
  
  mostrarCarro = () => {
    if(!this.state.carro.length)
      return
    this.setState({ esCarroVisible: !this.state.esCarroVisible })
  }

  render() {
    const { esCarroVisible } = this.state
    return (
      <div style={styles.page_B}>
        <Navbar
          carro={this.state.carro}
          esCarroVisible={esCarroVisible}
          mostrarCarro={this.mostrarCarro}
        />
        <Layout>
          <Title />
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.products}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
