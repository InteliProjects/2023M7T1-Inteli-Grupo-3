// Setting the component to be rendered at the client side.
"use client"

// Importing all required modules.
import Image from "next/image";
import { useEffect, useState } from "react";
import Header from "@/app/components/Header";
import { IProduct } from "@/app/interfaces/IProduct";
import PackageIcon from '../../../../public/package.svg';
import OrderSummary from "@/app/components/OrderSummary";
import PageDescription from "@/app/components/PageDescription";
import ShippingDetailsForm from "@/app/components/ShippingDetailsForm";

// Exporting component.
export default function CheckoutShippingDetailsPage() {
	// Defining the subtotal state.
    const [subtotal, setSubtotal] = useState(0);

	// Setting the subtotal state.
    useEffect(() => {
        let subtotal = 0;

        const products = JSON.parse(localStorage.getItem('order') as string);

        products.forEach((product : IProduct) => {
            subtotal += product.price;
        })

        setSubtotal(subtotal);
    }, [])

	// Returning component.
    return (
        <>
            <Header />
            <div className="flex justify-between">
                <div className="max-w-[505px]">
                    <PageDescription 
                        title="Como você gostaria de receber seu pedido?" 
                        description="Selecione a opção que melhor atenda às suas necessidades abaixo. Oferecemos diferentes métodos de entrega para garantir sua conveniência e satisfação. Por favor, note que algumas opções podem depender da disponibilidade em sua região." />
                    <div className="flex h-20 align-middle border-solid border-black border-2 rounded-xl p-6 mb-12">
                        <Image className="mr-6" src={PackageIcon} alt="Pacote" width={24} height={24}/>
                        <p className="text-base font-medium">Entrega</p>
                    </div>
                    <ShippingDetailsForm />
                </div>
                <OrderSummary subtotal={subtotal}/>
            </div>
        </>
    )
}