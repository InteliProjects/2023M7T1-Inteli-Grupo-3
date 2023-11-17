"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import RoundedButton from "./RoundedButton";
import Image from 'next/image';
import Bag from "../../../public/bag.svg";
import TonStore from "../../../public/stone.svg";
import { JwtPayload, decode } from 'jsonwebtoken';


export default function HeaderAuthenticated({ onLogout }: { onLogout: () => void }) {

    const router = useRouter();
    const [error, setError] = useState('');
    const [activeOption, setActiveOption] = useState('');
    const currentPath = usePathname();

    function decodedTokenLocalStorage() {
      const token = localStorage.getItem('token');
    
      if (token) {
        try {
          const decodedToken = decode(token);
          return decodedToken;
        } catch (error) {
          console.error('Erro ao decodificar o token:', error);
          return null;
        }
      } else {
        console.error('Nenhum token encontrado no localStorage.');
        return null;
      }
    }

    const decodedToken = decodedTokenLocalStorage();

    if (decodedToken && typeof decodedToken === 'object' && 'name' in decodedToken) {
      const nomeDoUsuario = (decodedToken as JwtPayload).name;
      console.log('Nome do usuário:', nomeDoUsuario);
    } else {
      console.error('Campo "name" não encontrado no token ou token não decodificado.');
    }
    
      const handleOptionClick = (option: string) => {
          router.push(option); // Redireciona para a opção clicada
          setActiveOption(option); // Define a opção clicada como ativa
      };

      function handleRegister() {
          router.push('/register');
      }
      

      function handleLogout() {
        localStorage.removeItem('token'); // Substitua 'seuTokenDeAutenticacao' pelo nome do seu token
          router.push('/home');
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
          <Link href="/orders" className={currentPath === '/orders' ? 'font-bold text-green-500' : ''}> 
            Meus Pedidos
          </Link>
        </div>

        <div className="ml-4 flex items-center md:ml-6 space-x-8">
          <a href="/bag">
            <Image src={Bag} alt="Bag" />
          </a>
          {decodedToken && typeof decodedToken === 'object' && 'name' in decodedToken && (
            <p className="text-{111111} text-l font-bold">Olá, {decodedToken.name}</p>
          )}
          <a>
            <RoundedButton text="sair" width="w-24" onClick={handleLogout} bgColor='bg-[#FFFFFF]' borderColor='border-2'/>
          </a>
        </div>
      </div>
    );
}