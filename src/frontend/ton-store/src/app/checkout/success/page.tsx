// Setting the component to be rendered at the client side.
"use client"

// Importing all required modules.
import { useEffect, useState } from "react";
import Header from "@/app/components/Header";
import { IProduct } from "@/app/interfaces/IProduct";
import OrderSummary from "@/app/components/OrderSummary";
import PageDescription from "@/app/components/PageDescription";

// Exporting component.
export default function CheckoutSuccess() {
	// Defining the subtotal state.
    const [subtotal, setSubtotal] = useState(0);

	// Setting the subtotal state.
    useEffect(() => {
		// Defining the subtotal variable.
        let subtotal = 0;

		// Getting the products from the local storage.
        const products = JSON.parse(localStorage.getItem('order') as string);

		// Calculating the subtotal.
        products.forEach((product : IProduct) => {
            subtotal += product.price;
        })

		// Setting the subtotal state.
        setSubtotal(subtotal);
    }, [])

	// Returning component.
    return (
        <>
            <Header />
            <div className="flex justify-between">
                <div className="max-w-[505px]">
                    <PageDescription 
                        title="Pedido realizado com sucesso!" 
                        description="Seu pedido foi registrado e o pagamento está em processamento. Uma vez aprovado, você receberá um e-mail de confirmação com detalhes e informações de entrega. Agradecemos sua confiança e em breve, seu pedido estará a caminho." />
                </div>
                <OrderSummary subtotal={subtotal}/>
            </div>
        </>
    )
}