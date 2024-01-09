import { Component } from 'react'
import Product from './Product'

//Aqui le doy estilo a el contenedor de los productos
const style = {
    products: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
}

//Esta es la clase de Productos, en plural, esto es un array de productos que se agregan al carro de compras
class Products extends Component {
    render () {
        const { products, addToCart } = this.props

        return (
            <div style={style.products}>
                {products.map(product =>
                    <Product 
                        addToCart={addToCart}
                        key={product.name}
                        product={product}
                    />    
                )}
            </div>
        )
    }
}

export default Products