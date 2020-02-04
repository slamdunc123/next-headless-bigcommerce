import axios from 'axios'; 

export default async ({ query: { id } }, res) => {

  let products = [];

  await axios(
      {
        method: "GET",
        url: `https://api.bigcommerce.com/stores/5xucklva8y/v3/catalog/products/${id}/images`,
          headers: {
            "X-Auth-Client": '4berj6c79aulu1fiqgeq3kupga0oe01',
            "X-Auth-Token": '5xe20syvcw3l4oibycyeoj85ezsvaio'
          }
      }
    )

    // .then(response => products = response.data.data)
     
    // const filtered = products.filter(product => product.id == id)
   
    // if (filtered.length > 0) {
    //   res.status(200).json(filtered[0])
    // } else {
    //   res.status(404).json({ message: `User with id: ${id} not found.` })
    // }

    .then(response => products = response.data.data)
    .catch(err => console.log);
  
    res.status(200).json(products)
}