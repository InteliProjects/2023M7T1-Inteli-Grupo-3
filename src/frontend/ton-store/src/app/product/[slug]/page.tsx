// Importing components.
import Image from "next/image";
import Header from "@/app/components/Header";
import AddToBag from "@/app/components/AddToBag";
import { IProduct } from "@/app/interfaces/IProduct";
import ProductImage from '../../../../public/product.png'
import { productsMock } from "../../../../mock/productsMock";

// Exporting page.
export default function Product({ params }: { params: { slug: string } }) {

	// Getting slug from params.
    const productSlug = params.slug;

    // TO-DO: fetch product from API by slug.
    const productFromMock = productsMock.find(product => product.slug === productSlug);
    const product : IProduct = productFromMock != undefined ? productFromMock : {
        id: '1',
        name: 'Calça',
        price: 200.1,
        images: [ProductImage],
        category: 'Vestuário',
        slug: 'calca',
        slogan: ''
    };

	// Returning page.
    return (
        <>
            <Header />
            <div className="flex justify-between items-center">
                <div className="flex">
                    <Image src={product.images[0]} alt={product.name} width={560} height={560}/>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-col mb-10 gap-y-3 ">
                        <h1 className="text-3xl font-medium">{product.name}</h1>
                        <p className="text-base font-medium">R$ {product.price}</p>
                        <p className="text-base font-medium">{product.slogan}</p>
                    </div>
                    {/* <div className="mb-8">
                        <p className="text-base font-normal text-[#757575]">incluso impostos</p>
                    </div> */}
                    <AddToBag productSlug={productSlug}/>
                </div>
            </div>
        </>
    )
}