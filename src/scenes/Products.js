import userEvent from '@testing-library/user-event'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-materialize'

function Products() {
  const [allProducts, setAllProducts] = useState()
  const [newProduct, setNewProduct] = useState({})

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/products`)
      .then((response) => response.json())
      .then((data) => setAllProducts(data))
      .catch((err) => console.log('This is an error', err))
  }, [])

  function createProduct() {
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newProduct)
    })
  }

  return (
    <div className="container custom-container">
      <ul class="collection with-header">
        <h4>Prodcuts</h4>
        {allProducts && allProducts.map((product) => {
          return (
            <li class="collection-item">
              <div>
                {product.id}
                <a href="#!" class="secondary-content">
                  <i class="material-icons">send</i>
                </a>
              </div>
            </li>
          )
        })}
      </ul>
      <label>Name</label>
      <input
        onChange={e => setNewProduct({ ...newProduct, id: e.target.value })}
      />
      <Button onClick={() => createProduct()}>Create Product</Button>
    </div>
  )
}

export default Products