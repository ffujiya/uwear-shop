import React from 'react';
import Header from '../Header/Header'
import ProductList from '../ProductList/ProductList'
import PDP from '../PDP/PDP'
import Cart from '../Cart/Cart';
import { Route, Routes } from 'react-router';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={
            <ProductList />
          } />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<PDP />} />
        </Routes>
      </div>
    );
  }
}

export default App;