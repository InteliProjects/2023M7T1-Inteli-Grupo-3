"use client"
// Importing all required modules.
import OptionsButton from "./Options";
import { IOrder } from "../interfaces/IOrder";
import { useEffect, useState } from "react";
import { API_BASE_URL } from '../config';
import Products from "./Products";


// Exporting component.
export default function Orders() {

    const [orders, setOrders] = useState<IOrder[]>([]);

    useEffect(() => {
        async function fetchOrders() {
          try {
            const token = localStorage.getItem( 'token'); // Substitua 'seuToken' pelo nome da chave em que o token está armazenado
            const response = await fetch(`http://localhost:8080/api/v1/order`, {
              method: 'GET',
              headers: {
                'Authorization': `Bearer ${token}`, // Inclua o token no cabeçalho de autorização
              },
            });

            if (response.ok) {
              const data = await response.json();
              setOrders(data); // Define os pedidos no estado
            } else {
              console.error('Erro ao buscar pedidos:', response.statusText);
            }
          } catch (error) {
            console.error('Erro na requisição:', error);
          }

        }

        fetchOrders();
      }, []);

    // Function to get the appropriate style based on the status
    const getStatusStyle = (status: string) => {
		// Setting a memory space to store background and text colors.
        let bgColor, textColor;

		// Setting up colors based on status.
        switch (status) {
            case 'processing':
                bgColor = '#FFEEDB';
                textColor = '#F29E50';
                break;
            case 'PAYMENT_REJECTED':
                bgColor = '#FFE4DB';
                textColor = '#F26350';
                break;
            case 'RECEIVED':
                bgColor = '#EBFFF1';
                textColor = '#119C2B';
                break;
            case 'shipped':
                bgColor = '#E9FBFF';
                textColor = '#44A5EB';
                break;
            case 'delivered':
                bgColor = '#F3FFE9';
                textColor = '#7ABB26';
                break;
            default:
                break;
        }

		// Returning style.
        return {
            backgroundColor: bgColor,
            color: textColor,
        };

    };

	// Function to translate status.
	const translatedStatus = (status: string) => {
		switch (status) {
			case 'processing':
				return 'Pendente';
            case 'PAYMENT_REJECTED':
                return 'Recusado';
			case 'RECEIVED':
				return 'Aprovado';
			case 'shipped':
				return 'Enviado';
			case 'delivered':
				return 'Entregue';
			default:
				break;
		}
	}

	// Returning component.
    return (
        <table className="w-full text-left border-collapse">
            <thead className="text-xs uppercase text-[#84919A]">
                <tr>
                    <th className="pb-2 border-b ">Nº</th>
                    <th className="pb-2 border-b ">Valor</th>
                    <th className="pb-2 border-b ">Status</th>
					<th className="pb-2 border-b "></th>
                </tr>
            </thead>
            <tbody>
                {orders.map((order: any) => (
                    
                    <tr key={order.id} className="border-b">
                        <td className="py-2">{order.id}</td>
                        <td className="py-2">R$ {order.products.reduce(
                            (acc : any, product:any) => acc + product.product.price * product.quantity,
                            0,)}
                        </td>
                        <td className="py-2">
                            <span
                                className="text-center text-sm font-semibold py-1 px-3 rounded w-24 inline-block capitalize"
                                style={getStatusStyle(order.status)}
                            >
                                {translatedStatus(order.status)}
                            </span>
                        </td>
						<td className="py-2">
							<OptionsButton orderId={order.id}/>
						</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
