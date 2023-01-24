import React from 'react'
import Product from './Product'
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getProducts as listProducts } from "../../redux/actions/productActions"


const SectionScreen = ({radioPetValue, keyProduct}) => { 

    const dispatch = useDispatch();
    const getProducts = useSelector((state) => state.getProducts);
    const { products, loading, error } = getProducts;

    useEffect(() => {
      dispatch(listProducts());
    }, [dispatch]);

    const [productsSec, setProductSec] = useState(products)

    useEffect(() => {
      setProductSec(products.filter(p => (p.pet.name === localStorage.petSection )))  
    }, [radioPetValue, loading]);

    useEffect(() => { 
      if(keyProduct != null){
        console.log(productsSec[0])
        setProductSec(products.filter(p => (p.pet.name === localStorage.petSection ) && (p.section.name === keyProduct ) ))
      }    
    }, [keyProduct]);
    
    return(
        <div className="homescreen__products">
          { error ? (
            <h2>{error}</h2>
          ) : (
            productsSec.map((product) => (
              <Product
                key={product._id}
                title={product.title}
                description={product.description}
                price={product.price}
                image={product.image}
                productId={product._id}
              />
            ))
          )}
        </div>
    )

}

export default SectionScreen