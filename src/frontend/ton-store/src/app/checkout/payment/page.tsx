// Setting the component to be rendered at the client side.
"use client"

// Importing all required modules.
import { useEffect, useState } from "react";
import Header from "@/app/components/Header";
import { IProduct } from "@/app/interfaces/IProduct";
import PaymentForm from "@/app/components/PaymentForm";
import OrderSummary from "@/app/components/OrderSummary";
import PageDescription from "@/app/components/PageDescription";

// Exporting component.
export default function CheckoutPaymentPage() {
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
                        title="Quase lá!" 
                        description="Você está a apenas um passo de concluir o seu pedido! Tudo o que falta agora é fornecer suas informações de pagamento. É rápido, fácil e seguro." />
                    <PaymentForm />
                </div>
                <OrderSummary subtotal={subtotal}/>
            </div>
        </>
    )
}