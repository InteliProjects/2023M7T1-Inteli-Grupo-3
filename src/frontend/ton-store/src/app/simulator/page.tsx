"use client"
import Header from "../components/Header";
import Image from 'next/image';
import SimulatorImage from '../../../public/simulator.svg'
import SimulatorForm from "../components/SimulatorForm";


export default function Home() {

    return(
        <>
        <Header />
        <div className="max-w-[1408px] max-h-[500px] grid grid-cols-2">
            <div className="w-[80%] flex flex-col mb-8 gap-y-8">
                <h4 className="col-start-1 mt-8 text-xl tracking-tight sm:text-6xl xl:max-w-[43.5rem]"> Simulador</h4>
                <p className="col-start-1 max-w-lg text-3xl font-extralight">Descubra a opção perfeita para maximizar seus ganhos! Nossa calculadora utiliza o seu faturamento mensal como base para apresentar recomendações específicas, ajudando-o a economizar e a otimizar seus lucros. Incrível, não é?</p>
                <SimulatorForm />
            </div>  
            <div className="ml-24 relative sm:h-[400px] lg:h-[550px] items-end">
                <Image src={SimulatorImage} alt="Home" height={500} className="object-contain h-full w-full"/>
            </div>
        </div>  
        </>
    )
}
