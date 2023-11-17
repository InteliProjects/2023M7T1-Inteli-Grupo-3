"use client"
import Header from "../components/Header";
import Image from 'next/image';
import HomeImage from '../../../public/home.svg'
import RoundedButton from "../components/RoundedButton";
import { useRouter } from 'next/navigation'


export default function Home() {

    const router = useRouter();
    function handleAddNewProduct() {
        router.push('/simulator');
    }

    return(
        <>
        <Header />
        <div className="max-w-[1408px] max-h-[500px] grid grid-cols-2">
            <div>
                <h4 className="col-start-1 mt-8 text-4xl tracking-tight sm:text-7xl xl:max-w-[43.5rem]"> A Maquininha <strong>feita para você</strong> vender mais</h4>
                <p className="col-start-1 mt-8 mb-8 max-w-lg text-3xl font-extralight">Venda com múltiplas bandeiras, parcele em até 18x e receba o valor das suas vendas todo dia útil.</p>
                <RoundedButton text="Descubra suas taxas" width="w-64" onClick={handleAddNewProduct} />
            </div>  
            <div className="ml-24 relative sm:h-[400px] lg:h-[550px] items-end">
                <Image src={HomeImage} alt="Home" height={500} className="object-contain h-full w-full"/>
            </div>
        </div>  
        </>
    )


}
