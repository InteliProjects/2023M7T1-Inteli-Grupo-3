"use client"
import Header from "../components/Header";
import Image from "next/image";
import RegisterForm from "../components/RegisterForm";
import RegisterImage from '../../../public/register.svg' ;


export default function Register(){

    return(
        <>
        <Header/>

        <div className=" grid grid-cols-2 gap-4">
                <div className="w-[65%]">
                <h1 className="text-xl font-semibold mb-2">Registre-se aqui</h1>
                <p className="mb-6 font-normal">Estamos felizes por você ter escolhido uma solução de pagamento que é sinônimo de confiabilidade e eficiência. Antes de prosseguir, precisamos de algumas informações para criar sua conta e oferecer a melhor experiência possível.</p>
                <RegisterForm/>
                </div>
                <div className="col-span-1">
                <Image src={RegisterImage} alt="Home" className="object-contain h-full w-full"/>
                </div>
            </div>        
        </>

    )

}