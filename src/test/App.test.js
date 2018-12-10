import React from 'react';
import ReactDOM from 'react-dom';
import mockdata from './mockdata';

import App from '../App';
import ProductList from '../components/ProductList';
import ProductItem from '../components/ProductItem';
import ProductStats from '../components/ProductStats';

it('Should render App container without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Should render ProductList without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProductList />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Should render ProductItem without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProductItem product={mockdata.products[0]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Should render ProductStats without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProductStats />, div);
  ReactDOM.unmountComponentAtNode(div);
});
