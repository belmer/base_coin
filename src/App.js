import React, { Component } from 'react'
import './App.css'
import { getProducts, getProduct24HrStat } from './api'
import Spinner from './components/Spinner'
import ErrorBoundary from './components/ErrorBoundary'

class App extends Component {
  state = {
    products: [],
    loadingProducts: false,
    loadingStat: false,
    selected_product: null,
    selected_stats: null
  }

  componentWillMount() {
    this.setState({ loadingProducts: true })
    this.allProducts()
  }
  allProducts = async ()=> {
    const products = await getProducts()
    const selected_product = products[0]
    const selected_stats = await getProduct24HrStat(selected_product.id)
    this.setState({
      products,
      selected_product,
      selected_stats
    }, ()=> this.setState({ loadingProducts: false }))
  }

  updateStats = async (selected_product)=> {
    this.setState({ loadingStat: true })
    const selected_stats = await getProduct24HrStat(selected_product.id)
    this.setState({
      selected_product,
      selected_stats
    }, ()=> this.setState({ loadingStat: false }))
  }
  render() {
    const ProductList = React.lazy(()=> import('./components/ProductList'))
    const ProductStats = React.lazy(()=> import('./components/ProductStats'))
    const { loadingStat, loadingProducts, selected_stats, selected_product, products } = this.state
    return (
      <div className='App'>
        <div className='col-md-8'>
          <ErrorBoundary message='Something went wrong when getting products.'>
            <React.Suspense fallback={<Spinner/>}>
              <ProductList
                loading = {loadingProducts}
                onProductSelect={(product)=>this.updateStats(product)}
                products={products}/>
            </React.Suspense>
          </ErrorBoundary>
        </div>
        <div className='col-md-4'>
          <ErrorBoundary message='Something went wrong getting product 24hr stats.'>
            <React.Suspense fallback={<Spinner/>}>
              <ProductStats
                loading={loadingStat}
                product={selected_product}
                stats = {selected_stats}/>
            </React.Suspense>
          </ErrorBoundary>
        </div>
      </div>
    )
  }
}

export default App
