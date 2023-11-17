// Importing components.
import Header from "@/app/components/Header";
import Tracker from "@/app/components/Tracker";
import { IOrder } from "@/app/interfaces/IOrder";

// Exporting page.
export default function TrackOrder({ params }: { params: { email: string, orderId: number } }) {

	// Getting email and orderId from params.
	const { email, orderId } = params;

	// TO-DO: fetch order from API by email and orderId.
	const order : IOrder = {
		id: 1,
		status: 'processing',
		products: [
			{
				id: '1',
				name: 'Boné',
				price: 100,
				images: [],
				category: 'Acessórios',
				slug: 'bone'
			}
		],
	}

	// Returning page.
	return (
		<>
			<Header />
			<Tracker order={order} />
		</>
	)
}