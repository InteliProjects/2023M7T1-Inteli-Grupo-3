import { IBagItemProps } from "../interfaces/IBagItemProps";
import Image from 'next/image';
import TrashIcon from '../../../public/trash.svg';
import { useEffect, useState } from "react";

export default function BagItem({ product, bag, setBag }: IBagItemProps) {

    const handleRemoveFromBag = () => {
        bag.splice(bag.indexOf(product.slug), 1)
        const newBag = [...bag]
        setBag(newBag)
        localStorage.setItem('bag', JSON.stringify(bag))
    }

    return (
        <div className="flex justify-between w-[745px] mb-9">
            <div className="flex">
                <Image className="w-40" src={product.images[0]} alt={product.name}/>
                <div className="flex flex-col justify-between ml-9 h-auto">
                    <div>
                        <h1 className="font-medium">{product.name}</h1>
                        <p className="text-[#757575]">{product.category}</p>
                    </div>
                    <div>
                        <button className="transition ease-in-out duration-300 hover:scale-150" onClick={handleRemoveFromBag}>
                            <Image src={TrashIcon} alt="trash"/>
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <p className="font-medium">R$ {product.price}</p>
            </div>
        </div>
    )
}