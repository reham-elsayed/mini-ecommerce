import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProductsAsync } from "../../Store/productsSlice";
import type { ProductsState, Products, Product } from "../../Store/productsSlice";
import type { AppDispatch } from "../../Store/store"; 
const ProductsList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, isLoading, isError, errorMessage } = useSelector(
    (state: { products: ProductsState }) => state.products,
  );

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {errorMessage}</p>;

  return (
    <div className='container '>
      {products.map((product:Product) => (
       <div>
        <img src={product.image} alt={product.category}/>
        <p>{product.category}</p>
        <p>{product.description}</p>
       </div>
      ))}
   </div>
  );
};
export default ProductsList;
