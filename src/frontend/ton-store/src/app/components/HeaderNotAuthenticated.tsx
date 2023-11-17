"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import RoundedButton from "./RoundedButton";
import Image from 'next/image';
import Bag from "../../../public/bag.svg";
import TonStore from "../../../public/stone.svg";

export default function HeaderNotAuthenticated() {

    const router = useRouter();
    const [error, setError] = useState('');
    const [activeOption, setActiveOption] = useState('');
    const currentPath = usePathname();
  
    
      const handleOptionClick = (option: string) => {
          router.push(option); // Redireciona para a opção clicada
          setActiveOption(option); // Define a opção clicada como ativa
      };
  
      function handleRegister() {
          router.push('/register');
      }
  
      function handleLogin() {
          router.push('/login');
      }
  
  return (
      <div className="flex justify-between mb-16 items-center">
        <div className="flex items-center space-x-16">
          <Link href="/home" className={currentPath === '/home' ? 'font-bold text-green-500' : ''}>
              <Image src={TonStore} alt="TonStore"/>
          </Link>
          <Link href="/home" className={currentPath === '/home' ? 'font-bold text-green-500' : ''}>
            Início
          </Link>
  
          <Link href="/" className={currentPath === '/' ? 'font-bold text-green-500' : ''}>
            Produtos
          </Link>
          <Link href="/simulator" className={currentPath === '/simulator' ? 'font-bold text-green-500' : ''}> 
            Simulador
          </Link>
        </div>
  
        <div className="ml-4 flex items-center md:ml-6 space-x-8">
          <a href="/bag">
            <Image src={Bag} alt="Bag" />
          </a>
          <a href="/register">
            <RoundedButton text="Cadastrar-se" width="w-36" onClick={handleRegister} bgColor='bg-[#FFFFFF]' borderColor='border-2'/>
          </a>
          <a href="/login">
            <RoundedButton text="Entrar" width="w-28" onClick={handleLogin}/>
          </a>
        </div>
      </div>
    );

}