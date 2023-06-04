import { Component } from 'react';

const styles = {
    logo: {
        display: 'flex',
        fontWeight: '700',
        fontSize: '2rem',
        padding: '0px 65px 0px 65px',
    }
}

class Logo extends Component {
    render() {
        return (
            <div style={styles.logo}>
                <img
                    src="/logo.png"
                    alt="logo.png"
                    width="80"
                    height="75"
                />
            </div>
        )
    }
}

export default Logo;