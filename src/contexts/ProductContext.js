import React, {createContext, useState, useEffect} from
'react';

//create context
export const ProductContext = createContext();

const ProductProvider = ({children}) => {
  //products state
  const [products, setProducts] = useState([]);
  const headers = {
    "X-Authorization": import.meta.env.VITE_APP_API_KEY_LIVE,
    "Accept": "application/json",
    "Content-Type": "application/json",
  };


  //fetch Products
  useEffect(()=> {
    const fetchProducts= async () => {
      const response = await fetch("https://api.chec.io/v1/products?limit=40", {
        method: 'GET',
        headers: headers,
        });

        const data = await response.json();
        //console.log(data);
    };
    fetchProducts();
  }, [])

  return <ProductContext.Provider> {children} </ProductContext.Provider>;
};

export default ProductProvider;
