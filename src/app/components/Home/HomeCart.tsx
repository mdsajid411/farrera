"use client";
import React, { useEffect, useState } from "react";

type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  username: string;
};

const HomeCart: React.FC = () => {
  const [products, setProduct] = useState<Product[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProduct(data.slice(0,7));
      console.log(data);
    } catch (error) {
      console.log("data not fetch", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="main flex flex-wrap p-4">
        <div className="child1 flex flex-col justify-between w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
          <div className="w-full max-w-xl">
            <p className="font-semibold text-4xl leading-tight">
              Brought to you from the farm with love.
            </p>
          </div>
          <div className="w-full max-w-lg mt-4">
            <p className="font-medium text-lg leading-snug">
              Derived from milk and produced in wide ranges of flavours, textures
              and forms by coagulation of the milk protein casein.
            </p>
          </div>
        </div>
        {products.slice(0, 3).map((product) => (
          <div 
            key={product.id}
            className="child2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4"
          >
            <div className="bg-white shadow-2xl rounded-[30px] overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src={product.image}
                alt={product.name}
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  ${product.name}
                </h2>
                <p className="text-gray-600 mt-2">{product.username}</p>
              </div>
            </div>
          </div>
        ))}

        <div className="w-full flex flex-wrap mt-24">
          {products.slice(3).map((product) => (
            <div 
              key={product.id}
              className="child2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4"
            >
              <div className="bg-white shadow-2xl rounded-[30px] overflow-hidden">
                <img
                  className="w-full h-48 object-cover"
                  src={product.image}
                  alt={product.name}
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    ${product.price}
                  </h2>
                  <p className="text-gray-600 mt-2">{product.username}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeCart;
