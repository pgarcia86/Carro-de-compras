import { Component } from 'react'
import Products from './components/Products'
import NavBar from './components/NavBar'
import Layout from './components/Layout'
import Title from './components/Title'

class App extends Component {
  state = {
    products: [
      {name: 'Tomate', price: 1.50, img: '/products/tomate.jpg'},         //Estas imagenes van en la carpeta public/products
      {name: 'Lechuga', price: 1.70, img: '/products/lechuga.jpg'},
      {name: 'Patata', price: 1.50, img: '/products/patata.jpg'},
      {name: 'Berenjena', price: 2.50, img: '/products/berenjena.jpg'},
    ],
    carro: [],
    isVisible: false,
  }

  addToCart = (product) => {
    const { carro } = this.state
    if(carro.find(x => x.name === product.name)){
      const newCarro = carro.map(x => x.name === product.name
      ?({
        ...x, 
        cantidad: x.cantidad + 1
      })
      : x)
      return this.setState({carro: newCarro})
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...product,
        cantidad: 1,
      })
    })
  }

  showCart = () => {
    if(!this.state.carro.length){return}
    this.setState({isVisible: !this.state.isVisible})
  }

  render () {
    const { isVisible } = this.state
    return (
      <div>
        <NavBar carro={this.state.carro} isVisible={isVisible} showCart={this.showCart}/>
        <Layout>
          <Title />
          <Products 
            addToCart={this.addToCart}
            products={this.state.products}
          />
        </Layout>
      </div>
    )
  }
}

export default App;
