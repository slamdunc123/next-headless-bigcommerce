import 'isomorphic-fetch';

const Product = ({productImages}) => {
  console.log(productImages.length)

  return (
    <div>
      {
        (productImages.length > 0)
        ? productImages.map(productImage => 
        <div key={productImage.id}>{productImage.product_id} - {productImage.id} - <img src={productImage.url_tiny} alt=""/> </div>) 
        : <div>No images for product </div>
      }
      
    </div>
  )
}

// call api to get sinlge product data

Product.getInitialProps = async function(context){
  console.log('id = ', context.query.id)
  const res = await fetch(`http://localhost:3000/api/products/${context.query.id}`)
  const data = await res.json()
  return {
    productImages: data
  }
  
}

export default Product
