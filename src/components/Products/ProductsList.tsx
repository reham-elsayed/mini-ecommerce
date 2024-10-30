import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProductsAsync } from "../../Store/productsSlice";
import type { ProductsState, Products, Product } from "../../Store/productsSlice";
import type { AppDispatch } from "../../Store/store"; 
import Notfound from "../Notfound/Notfound";
import Skeleton from "../Skeleton/Skeleton";
import { ErrorBoundary } from "react-error-boundary";
const ProductsList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, isLoading, isError, errorMessage } = useSelector(
    (state: { products: ProductsState }) => state.products,
  );

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  // if (isLoading) return <p>Loading...</p>;
  // if (isError) return <p>Error from product list: {errorMessage}</p>;

  return (
    <div className="mx-auto px-8 py-12 max-w-7xl">
      {isLoading &&  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {Array.from({ length: 8}).map((_, index) => (
          <div key={index} className="p-4">
            <Skeleton width="100%" height="200px" /> {/* Adjust dimensions as needed */}
            <Skeleton width="70%" height="20px" className="mt-2" />
            <Skeleton width="50%" height="20px" className="mt-1" />
          </div>
        ))}
      </div>}
      {isError? <Notfound errorMessage={errorMessage}/>:null}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
      {products.map((product: Product) => (
        <div
          key={product.id} 
          className="relative p-2 group overflow-hidden bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <img
            className="w-full h-64 object-contain  transform   group-hover:scale-105 transition-transform duration-300 mix-blend-multiply"
            src={product.image}
            alt={product.category}
          />
          <div className="p-4 bg-yellow-50">
            <p className="text-gray-500 text-sm uppercase">{product.category}</p>
            <h3 className="text-gray-800 font-semibold text-lg leading-tight truncate">
              {product.description}
            </h3>
            <div className="flex justify-between items-center mt-4">
              <span className="text-lg font-bold text-primary">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-sm text-gray-500">
                {product.rating.rate} / 5 ⭐
              </span>
            </div>
         
          <button className=" bg-slate-500  relative bottom-0 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-primary text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Add to Cart
          </button>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  )  
};
export default ProductsList;
