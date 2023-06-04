import { Component } from 'react';
import Producto from './Producto';
import '../css/Productos.css';

class Productos extends Component {
    render() {
        const { productos } = this.props;
        return (
            <div className="productos"> 
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