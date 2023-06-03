import { Component } from 'react';
import Button from './Button';

const styles = {
    producto: {
        border: '1px solid #eee',
        boxShadow: '0 5px 5px rgb(0, 0, 0, 0.1)',
        padding: '10px 15px',
        borderRadius: '5px',
        background: 'rgba(250, 250, 250, 0.5)',
    },
    img: {
        width: '95%',
        height: '55%',
    },
    sep: {
        paddingTop: '30px',
    },
}

class Producto extends Component {
    render() {
        const { producto, agregarAlCarro } = this.props

        return (
            <div style={styles.producto}>
                <img style={styles.img} alt={producto.name} src={producto.img}/>
                <h3 style={styles.sep}>{producto.name}</h3>
                <p>${producto.price}</p>
                <Button onClick={() => agregarAlCarro(producto)}>
                    Agregar al carro
                </Button>
            </div>
        )
    }
}

export default Producto;