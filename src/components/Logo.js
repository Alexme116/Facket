import { Component } from 'react';

const styles = {
    logo: {
        fontWeight: '700',
        fontSize: '2rem',
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