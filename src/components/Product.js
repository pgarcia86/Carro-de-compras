import { Component } from 'react'
import Button from './Button'

//Aqui le doy estilo a cada producto en particular
const style = {
    product: {
        border: 'solid 1px #eee',
        boxShadow: '0 5px 5px rgb(0,0,0,0.10)',
        width: '25%',
        padding: '10px 15px',
        borderRadius: '5px'
    },
    img: {
        width: '100%'
    }
}


//Esta es la clase unitaria de Producto. Este es cada uno de los productos, de manera individual

class Product extends Component {
    render () {
        console.log(this.props);
        const { product, addToCart } = this.props
        return (
            <div style={style.product}>
                <img style={style.img} alt={product.name} src={product.img}/>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <Button onClick={() => addToCart(product)}>
                    Add to cart
                </Button>
            </div>
        )
    }
}

export default Product


