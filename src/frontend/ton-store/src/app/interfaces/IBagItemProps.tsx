// Importing required modules.
import { IProduct } from "./IProduct";
import { Dispatch, SetStateAction } from "react";

// Purpose: This interface is used to define the bag item props.
export interface IBagItemProps {
    product: IProduct;
    bag: string[];
    setBag : Dispatch<SetStateAction<string[]>>;
}