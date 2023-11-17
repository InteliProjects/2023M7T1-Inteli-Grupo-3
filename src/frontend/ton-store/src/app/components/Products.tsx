"use client"
import Image from 'next/image';
import { IProduct } from '../interfaces/IProduct';
import { useEffect, useState } from 'react';
import { productsMock } from '../../../mock/productsMock';
import { API_BASE_URL } from '../config';


// Exporting component.
export default function Products() {

  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(`${API_BASE_URL}/api/v1/product`);
        if (response.ok) {
          const data = await response.json();
          setProducts(data); // Define os produtos no estado
        } else {
          console.error('Erro ao buscar produtos:', response.statusText);
        }
      } catch (error) {
        console.error('Erro na requisição:', error);
      }
    }

    fetchProducts();
  }, []);
  
  
  return (
    <div className="grid grid-cols-3 gap-28">
      {products.map((product) => (
        <a key={product.id} href={"/product/" + product.name}>
          <div className='mb-6 cursor-pointer transition ease-in-out duration-300 hover:scale-110'>
           
                <div className="relative sm:h-[300px] lg:h-[400px]">
                {/* <Image
                  // src={`data:image/jpeg;base64,${product.images[0]}`} // Converta Base64 para URL
                  src={product.image} // Converta Base64 para URL
                  alt={product.name}
                  fill
                  className='object-cover h-full w-full shadow rounded border-1'               
                   /> */}
                </div>
                        <h1 className="text-4xl font-bold mt-10">{product.name}</h1>
            <p className="text-base mt-2">R$ {product.price}</p>
            <p className="text-base mt-2">{product.description}</p>   
          </div>
        </a>
      ))}
    </div>
  );
}