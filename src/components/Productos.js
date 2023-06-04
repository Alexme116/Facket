import { Component } from 'react';
import Producto from './Producto';

const styles = {
    productos: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '40px',
    }
}

class Productos extends Component {
    render() {
        const { productos } = this.props;
        return (
            <div style={styles.productos}> // className="productos"
                {productos.map(producto =>
                    <Producto
                        key={producto.name}
                        producto={producto}
                    />)}
            </div>
            
        )
    }
}

export default Productos;