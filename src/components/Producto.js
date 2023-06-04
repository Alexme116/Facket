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
    boton: {
        display: 'flex',
        justifyContent: 'center',
    },
    botonEliminar: {
        backgroundColor: 'rgba(110, 110, 110, 1)',
        color: 'white',
        padding: '15px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
}

class Producto extends Component {
    render() {
        const { producto } = this.props

        return (
            <div style={styles.producto}>
                <img style={styles.img} alt={producto.name} src={producto.img}/>
                <h3 style={styles.sep}>{producto.name}</h3>
                <p>${producto.price}</p>
                <div style={styles.boton}>
                    <Button>
                        Proceder al pago
                    </Button>
                </div>
            </div>
        )
    }
}

export default Producto;