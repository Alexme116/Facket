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
    productoHover: {
        padding: '10px 15px',
        background: 'linear-gradient(135deg, rgba(230,230,230,0.5), rgba(190,190,190,0.4))',
        webkitBackdropFilter: 'blur(10px)',
        borderRadius: '20px',
        border: '1px solid rgba(255,255,255,0.18)',
        boxShadow: '0 8px 32px 0 rgba(300,300,300,1)',
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
    priceCont: {
        position: 'relative',
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0px 134px 0px 134px',
        fontFamily: 'Open Sans',
    },
    imgSol: {
        width: '15px',
        height: '17px',
    },
}

class Producto extends Component {
    state = {
        isHovered: false,
    };

    handleMouseEnter = () => {
        this.setState({ isHovered: true });
    };

    handleMouseLeave = () => {
        this.setState({ isHovered: false });
    };

    render() {
            const { producto } = this.props;
            const { isHovered } = this.state;
            const productoStyle = isHovered ? styles.productoHover : styles.producto;

            return (
                <div
                    style={productoStyle}
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                >
                    <img style={styles.img} alt={producto.name} src={producto.img} />
                    <h3 style={styles.sep}>{producto.name}</h3>
                    <div style={styles.priceCont}>
                        <img style={styles.imgSol} alt="Solana.png" src="/solanaLogo.png" />
                        <p>{producto.sol} SOL</p>
                    </div>
                    <div style={styles.boton}>
                        <Button>Proceder al pago</Button>
                    </div>
                </div>
            );
        }
    }

export default Producto;