import { Component } from 'react';
import Button from './Button';

const styles = {
    producto: {
        padding: '0px 15px 35px 15px',
        background: 'linear-gradient(135deg, rgba(235,235,235,0.9), rgba(235,235,235,0.8))',
        webkitBackdropFilter: 'blur(10px)',
        borderRadius: '20px',
        border: '1px solid rgba(255,255,255,0.18)',
        boxShadow: '0 8px 32px 0 rgba(0,0,0,0.37)',
    },
    productoHover: {
        padding: '0px 15px 35px 0px',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.9))',
        webkitBackdropFilter: 'blur(10px)',
        borderRadius: '20px',
        border: '1px solid rgba(255,255,255,0.18)',
        boxShadow: '0 8px 32px 0 rgba(300,300,300,1)',
    },
    img: {
        width: '95%',
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
    priceCont: {
        position: 'relative',
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0px 130px 0px 130px',
        fontFamily: 'Open Sans',
    },
    imgSol: {
        width: '15px',
        height: '17px',
    },
    dia: {
        textAlign: 'center',
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
                        <p>{producto.sol} $SOL</p>
                    </div>
                    <h3 style={styles.dia}>DIA {producto.dia}</h3>
                    <div style={styles.boton}>
                        <Button>Proceder al pago</Button>
                    </div>
                </div>
            );
        }
    }

export default Producto;