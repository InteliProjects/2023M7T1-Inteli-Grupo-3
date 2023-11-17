"use client"

import { useEffect, useState } from "react";
import RoundedButton from "./RoundedButton"


export default function AddToBag({ productSlug } : { productSlug : string }) {

    const [isInBag, setIsInBag] = useState(false);

    useEffect(() => {
        if(!localStorage.getItem('bag')) {
            localStorage.setItem('bag', JSON.stringify([]));
            setIsInBag(false);
        } else {
            const bag = JSON.parse(localStorage.getItem('bag') as string)
            if(bag.includes(productSlug)) {
                setIsInBag(true);
            } else {
                setIsInBag(false);
            }
        }
    }, [productSlug]);

    const handleAddToBag = () => {
        if(localStorage.getItem('bag')) {
            const bag = JSON.parse(localStorage.getItem('bag') as string)
            
            if(!bag.includes(productSlug)) {
                bag.push(productSlug)
                setIsInBag(true);
                localStorage.setItem('bag', JSON.stringify(bag))
            } else {
                bag.splice(bag.indexOf(productSlug), 1)
                setIsInBag(false);
                localStorage.setItem('bag', JSON.stringify(bag))
            }
        } else {
            localStorage.setItem('bag', JSON.stringify([productSlug]))
        }
    }

    return (
        <RoundedButton text={!isInBag ? "Adicionar à sacola" : "Remover"} width="w-96" onClick={handleAddToBag}/> 
    )
}