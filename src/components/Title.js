import { Component } from "react";

const style = {
    title:{
        marginBotton: '30px',
        padding: '10px 15px',
    }
}

class Title extends Component {
    render () {
        return (
            <h1 style={style.title}>
                Tienda
            </h1>
        )
    }
}

export default Title
