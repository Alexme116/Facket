import React, { Component } from 'react';

const styles = {
    button: {
        backgroundColor: '#0A283E',
        color: 'white',
        padding: '15px 20px',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
        fontWeight: 'bold',
    },
    buttonHover: {
        backgroundColor: '#114164',
        color: 'white',
        padding: '15px 20px',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
        fontWeight: 'bold',
    },
};

class Button extends Component {
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
        const { isHovered } = this.state;
        const buttonStyle = isHovered ? styles.buttonHover : styles.button;

        return (
            <button
                style={buttonStyle}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                {...this.props}
            >
            {this.props.children}
            </button>
        );
    }
}

export default Button;
