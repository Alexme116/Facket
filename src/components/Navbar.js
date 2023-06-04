import { Component } from 'react';
import Logo from './Logo';
import Carro from './Carro';

const styles = {
    navbar: {
        display: 'flex',
        backgroundColor: 'rgba(230, 230, 230, 1)',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: '100px',
        justifyContent: 'space-between',
        position: 'fixed',
        padding: '0 50px',
        boxShadow: '0 2px 3px rgb(0,0,0,0.1)',
    },
    textStyle: {
        fontSize: '16px',
        fontFamily: 'Arial, sans-serif',
        fontWeight: 'bold',
        color: 'black',
        textTransform: 'uppercase',
        marginLeft: '5px',
    },
};

class Navbar extends Component {
    render() {
        const { carro, esCarroVisible, mostrarCarro } = this.props;
        return (
            <nav style={styles.navbar}>
                <Logo />
                <span style={styles.textStyle}>Your Text Here</span>
                <Carro
                    carro={carro}
                    esCarroVisible={esCarroVisible}
                    mostrarCarro={mostrarCarro}
                />
            </nav>
        )
    }
}

export default Navbar;