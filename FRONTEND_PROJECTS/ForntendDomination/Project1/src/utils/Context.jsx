import axios from './axios'
import React, { createContext ,useEffect,useState } from 'react'

export const ProductContext =createContext();
const Context = ({children}) => {
    const [products, setProducts] = useState(null)

    const getProducts = async () =>{
        try{
            const { data } = await axios('/products');
            console.log(data)
            setProducts(data);
        }
        catch (err)   {  console.error(err.message) }
        
    }
    
    useEffect(() => {  
        getProducts();
     }, [])

  return  <ProductContext.Provider value={[products, setProducts]} >
    {children}
  </ProductContext.Provider>
}

export default Context;