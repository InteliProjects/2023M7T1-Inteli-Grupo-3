import { IOrder } from "@/app/interfaces/IOrder";

export const ordersMock: IOrder[] = [
	{
		deliveryId: 1,
		ETA: 'processing'
	},
	{
		deliveryId: 2,
		ETA: 'ready',

	},
	{
		deliveryId: 3,
		ETA: 'shipped',
	},
	{
		deliveryId: 4,
		ETA: 'delivered',
	},
]