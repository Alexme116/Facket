import { Component } from 'react';

const styles = {
    layout: {
        color: '#0A283E',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '100px',
        
    },
    container: {
        width: '1200px',
        padding: '0px 0px 92px 0px',
        paddingBottom: '40px',
    } 
}

class Layout extends Component {
    render() {
        return (
            <div style={styles.layout}>
                <div style={styles.container}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout;