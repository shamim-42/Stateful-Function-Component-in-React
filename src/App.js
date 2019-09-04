import React from 'react';
import { useState } from 'react';
import Axios from 'axios';


export default function Shop() {
  const [products, setProducts] = useState(['Rice', 'Oil']);

  let all_company_url = "some url here";

  function fetch_all_products() {

    Axios.get(all_company_url)
      .then(response => {
        //suppose below data we received from the server by API calling
        let data = ['book', 'exercise book', 'monitor', 'computer', 'pen']
        setProducts(data);
      });
  }

  let all_products = products.map(product => {
    return (
      <li>{product}</li>
    )
  });

  return (
    <>
      <h2>The Grocery Shop </h2>
      <button onClick={fetch_all_products}>See All Products </button>
      <ul>
        {all_products}
      </ul>
    </>
  )
}