import { Component } from 'react';
import Button from './Button';

const styles = {
    producto: {
        padding: '10px 15px',
        background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0))",
        webkitBackdropFilter: "blur(10px)",
        borderRadius: "20px",
        border: "1px solid rgba(255,255,255,0.18)",
        boxShadow: "0 8px 32px 0 rgba(0,0,0,0.37)",
    },
    img: {
        width: '95%',
        height: '55%',
    },
    sep: {
        paddingTop: '30px',
        textAlign: 'center',
        marginBottom: '-10px',
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
    center: {
        textAlign: 'center',
    },
}

class Producto extends Component {
    render() {
        const { producto } = this.props

        return (
            <div style={styles.producto}>
                <img style={styles.img} alt={producto.name} src={producto.img}/>
                <h3 style={styles.sep}>{producto.name}</h3>
                <p style={styles.center}>${producto.price}</p>
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