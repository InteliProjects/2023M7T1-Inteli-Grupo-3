import { IProduct } from "./IProduct";

export interface Product {
    productId: string;
    quantity: number;
    price: number
  }

export interface IOrder{
	id: string,
    userId: string,
    status: 'RECEIVED' | 'PAYMENT_ACCEPTED' | 'PAYMENT_REJECTED';
    products: Product[],
    shipping: {
        id: string,
        orderId: string,
        zip: string,
        city: string,
        address: string,
        state: string,
        price: number
    }

}