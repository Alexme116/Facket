import { Component } from 'react';
import Logo from './Logo';

const styles = {
    navbar: {
        display: 'flex',
        backgroundColor: 'rgba(235,235,235,0.9)',
        alignItems: 'center',
        width: '100%',
        height: '100px',
        justifyContent: 'space-between',
        position: 'fixed',
        boxShadow: '0 2px 3px rgb(0,0,0,0.1)',
        textAlign: 'center',
    },
    titleStyle: {
        width: '13%',
    },
};

class Navbar extends Component {
    render() {
        return (
            <nav style={styles.navbar}>
                <Logo />
                <img style={styles.titleStyle} alt='TituoNav.png' src='/tituloNav.png'/>
                <Logo />
            </nav>
        )
    }
}

export default Navbar;