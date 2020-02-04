const Product = ({product}) => {
  console.log('product = ', product)
  const { id, name, sku } = product
  return (
    <div>
      {id} - {sku} - {name}
    </div>
  )
}

// call api to get sinlge product data

Product.getInitialProps = async function(context){
  console.log('id = ', context.query.id)
  const res = await fetch(`http://localhost:3000/api/products/${context.query.id}`)
  const data = await res.json()
  return {
    product: data
  }
  
}

export default Product
