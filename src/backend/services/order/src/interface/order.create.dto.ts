export interface Product {
  productId: string;
  quantity: number;
}

export interface CreateOrderDto {
  products: Product[];
  shipping: {
    zip: string;
    city: string;
    address: string;
    state: string;
  };
  payment: {
    cardNumber: string;
    cardName: string;
    cardExpirationDate: string;
    cardSecurityCode: string;
  };
}
