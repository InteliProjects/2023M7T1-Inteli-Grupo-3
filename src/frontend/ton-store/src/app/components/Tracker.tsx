// Importing required modules.
import OrderSummary from "./OrderSummary";
import OrderTracker from "./OrderTracker";
import { IOrder } from "../interfaces/IOrder";
import PageDescription from "./PageDescription";

// Exporting component.
export default function Tracker({ order } : { order: any }) {
	// Setting order status.
	const orderStatus : any = {
		RECEIVED: 'Seu pedido foi recebido com sucesso. Agradecemos por escolher nossos produtos. Você receberá uma notificação assim que o pagamento for confirmado. Caso tenha alguma dúvida, fique à vontade para entrar em contato com nosso suporte.',
		PAYMENT_ACCEPTED: 'Seu pedido está pronto para ser enviado. Você receberá uma notificação assim que o despacho for realizado. Caso tenha alguma dúvida, fique à vontade para entrar em contato com nosso suporte.',
		PAYMENT_REJECTED:'Seu pagamento foi recusado.',
		shipped: 'Seu pedido foi enviado. Você receberá uma notificação assim que o pedido for entregue. Caso tenha alguma dúvida, fique à vontade para entrar em contato com nosso suporte.',
		delivered: 'Seu pedido foi entregue. Obrigado por escolher nossos produtos. Caso tenha alguma dúvida, fique à vontade para entrar em contato com nosso suporte.'
	}

	// Calculating subtotal.
	// const subtotal = order.products.reduce((acc : any, product : any) => acc + product.product.price, 0);

	// Returning component.
	return (
		<div className="flex justify-between">
				<div className="max-w-[505px]">
					<PageDescription 
						title={order.id ? `Pedido ${order.id}` : 'Acompanhar pedido'}
						description={order.id ? orderStatus[order.status] : 'Aqui, você pode verificar o status atual do seu pedido, desde o processamento até a entrega. Basta inserir o número do pedido e as informações relevantes para obter atualizações em tempo real.'} />
					{/* <OrderTracker status={order.status} /> */}
				</div>
				{/* <OrderSummary subtotal={subtotal}/> */}
			</div>
	)
}