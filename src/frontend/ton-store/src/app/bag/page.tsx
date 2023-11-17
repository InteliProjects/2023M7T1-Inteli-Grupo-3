"use client"

import { useEffect, useState } from "react";
import Header from "../components/Header";
import { IProduct } from "../interfaces/IProduct";
import ProductImage from "../../../public/product.png";
import BagItem from "../components/BagItem";
import RoundedButton from "../components/RoundedButton";
import { redirect } from "next/navigation";
import { productsMock } from "../../../mock/productsMock";
import { useRouter } from 'next/navigation'
import OrderSummary from "../components/OrderSummary";

export default function Bag() {
    const router = useRouter();
    const [bag, setBag] = useState<string[]>([]);
    const [products, setProducts] = useState<IProduct[]>([]);
    const [subtotal, setSubtotal] = useState(0);

    useEffect(() => {
        if(localStorage.getItem('bag')) {
            setBag(JSON.parse(localStorage.getItem('bag') as string))
        } else {
            setBag([])
        }
    }, [])

    useEffect(() => {
        // TO-DO: fetch products from API by slug.
        const fetchedProducts : IProduct[] =  productsMock.filter((product) => {
            return bag.includes(product.slug);
        })

        setProducts(fetchedProducts);
    }, [bag])
    
    useEffect(() => {
        let subtotal = 0;
        products.forEach((product) => {
            subtotal += product.price;
        })
        setSubtotal(subtotal);
    }, [products])

    function handleOrder() {
        localStorage.setItem('order', JSON.stringify(products));
        router.push('/checkout/shipping-details');
    }

    return (
        <>
            <Header />
            <div className="flex justify-between items-start    ">
                <div className="flex flex-col">
                    <h1 className="text-2xl font-medium mb-6">Sacola</h1>
                    {products.map((product) => {
                        return <BagItem key={product.id} product={product} bag={bag} setBag={setBag} />
                    })}
                </div>
                <div className="flex flex-col">
                    <OrderSummary subtotal={subtotal} />
                    <RoundedButton text="Fechar pedido" width="350px" onClick={handleOrder}/>
                </div>
            </div>
        </>
    )
}