// Example: {"orderId":"36b8ef53-3587-4c62-bad9-beb964a6a0ab","total":47.8,"payment":{"cardName":"Elias Biondo","cardNumber":"5502896537652671","cardExpirationDate":"12/24","cardSecurityCode":"394"}}
export interface Payment {
  cardName: string;
  cardNumber: string;
  cardExpirationDate: string;
  cardSecurityCode: string;
}

export interface IOrder {
  orderId: string;
  total: number;
  payment: Payment;
}
