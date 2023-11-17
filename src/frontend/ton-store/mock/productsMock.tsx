import { IProduct } from '@/app/interfaces/IProduct';
import ProductImage1 from '../public/product1.png'
import ProductImage2 from '../public/product2.png';
import ProductImage3 from '../public/product3.png';


export const productsMock : IProduct[] = [{
    id: '1',
    name: 'Ton',
    price: 100,
    image: "https://s3.amazoncontent.com/stone/432423.jpg",
    description: 'A maquininha para quem quer começar'
},
{
    id: '2',
    name: 'Ton',
    price: 100,
    image: "https://s3.amazoncontent.com/stone/432423.jpg",
    description: 'A maquininha para quem quer começar'
},
{
    id: '3',
    name: 'Ton',
    price: 100,
    image: "https://s3.amazoncontent.com/stone/432423.jpg",
    description: 'A maquininha para quem quer começar'
}];