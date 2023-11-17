"use client"
// Importing required modules.
import Tracker from "@/app/components/Tracker";
import { IOrder } from "@/app/interfaces/IOrder";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { API_BASE_URL } from '../../config';


// Exporting page.
export default function Orders({ params }: { params: { id: number } }) {
	// Getting order id from params.
	const { id } = params;
	const [order, setOrder] = useState<IOrder[]>([]);


	useEffect(() => {
        async function fetchOrder() {
          try {
            // Obtenha o token do localStorage
            const token = localStorage.getItem('token'); // Substitua 'seuToken' pelo nome da chave em que o token está armazenado  
            const response = await fetch(`http://localhost:8080/api/v1/order/${id}`, {
              method: 'GET',
              headers: {
                'Authorization': `Bearer ${token}`, // Inclua o token no cabeçalho de autorização
              },
            });
      
            if (response.ok) {
              const data = await response.json();
              setOrder(data); // Define os pedidos no estado
            } else {
              console.error('Erro ao buscar pedidos:', response.statusText);
            }
            console.log(token);
          } catch (error) {
            console.error('Erro na requisição:', error);
          }
        }
		console.log(order)
      
        fetchOrder();
      }, [id, order]);



	// Returning page.
	return (
		<>
		<Header />
		<Tracker order={order} />
		</>
		
	)
}