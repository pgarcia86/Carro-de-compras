import { Component } from "react";

const style = {
    cartDetails: {
        backgroundColor: '#fff',
        position: 'absolute',
        marginTon: 30,
        boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
        width: '300px',
        right: 50
    },
    ul:{
        margin: 0,
        padding: 0
    },
    product:{
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '25px 25px',
        borderBottom: 'solid 1px #aaa'
    }
}

class CartDetails extends Component{
    render() {
        const { carro } = this.props
        console.log(carro);
        return (
            <div style={style.cartDetails}>
                <ul style={style.ul}>
                    {carro.map(x => 
                        <li style={style.product} key={x.name}>
                            <img alt={x.name} src={x.img} width='50' height='32'/>
                            {x.name} <span>{x.cantidad}</span>
                        </li>)}
                </ul>
            </div>
        )
    }
}

export default CartDetails