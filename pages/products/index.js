import 'isomorphic-fetch';

import Link from 'next/link'

const Products = (props) => {
  console.log(props.products)
  const { products} = props

  return (
    <div>
      Products
      {
        products && products.map(product => 
          <Link key={product.id} href={`/products/${product.id}`} as="">
            <div >{product.id} - {product.name}</div>
          </Link>
        )
        
      }
    </div>
  )
}

// call api to get all products data

Products.getInitialProps = async function(){
  const res = await fetch('http://localhost:3000/api/products')
  const data = await res.json()
  return {
    products: data
  }
  
}

export default Products