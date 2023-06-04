import { Component } from 'react';
import Logo from './Logo';

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
    titleStyle: {
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#0A283E',
    },
};

class Navbar extends Component {
    render() {
        return (
            <nav style={styles.navbar}>
                <Logo />
                <p style={styles.titleStyle}>Facket Ticket</p>
                <Logo />
            </nav>
        )
    }
}

export default Navbar;