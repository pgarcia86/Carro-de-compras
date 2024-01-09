import { Component } from "react";
import BubbleAlert from './BubbleAlert'
import CartDetails from './CartDetails'

const style = {
    carro: {
        backgroundColor: '#359A2C',
        color: '#fff',
        border: 'none',
        padding: '15px',
        borderRadius: '10px',
        cursor: 'pointer'
    },
    bubble:{
        position: 'relative',
        left: 12,
        top: 20,
    }
}

class Carro extends Component {
    render () {
        const { carro, isVisible, showCart } = this.props
        const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0)
        return(
            <div>
                <span style={style.bubble}>
                    {cantidad !== 0
                    ? <BubbleAlert value={cantidad}/>
                    :null}                    
                </span>
                <button onClick={showCart} style={style.carro}>
                    Carro
                </button>
                {isVisible ? <CartDetails carro = {carro} /> : null}                
            </div>
        )
    }
}

export default Carro