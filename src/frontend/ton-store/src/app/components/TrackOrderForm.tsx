// Setting up the current page to be rendered at client side.
"use client"

// Importing modules.
import InputText from "./InputText"
import RoundedButton from "./RoundedButton"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { IInput } from "../interfaces/IInput";

// Exporting component.
export default function TrackOrderForm() {
	// Getting router.
    const router = useRouter();

	// Setting up email input.
	const [email, setEmail] = useState<IInput>({
		id: 'email',
		name: 'email',
		placeholder: 'E-mail',
		disabled: false,
		value: '',
		onChange: (e: any) => {
			const newValue = e.target.value;
			const error = validateEmail(newValue);
			setEmail((prevEmail) => ({
			  ...prevEmail,
			  value: newValue,
			  error,
			}));
		  },
	});

	// Setting up order number input.
	const [orderNumber, setOrderNumber] = useState<IInput>({
		id: 'order-number',
		name: 'order-number',
		placeholder: 'Número do pedido',
		disabled: false,
		value: '',
		onChange: (e: any) => {
			const newValue = e.target.value;
			const error = validateOrderNumber(newValue);
			setOrderNumber((prevOrderNumber) => ({
			  ...prevOrderNumber,
			  value: newValue,
			  error,
			}));
		  },
		type: 'number'
	});

	// Setting up email validation.
	function validateEmail(email: string): string {
		const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
		if (!pattern.test(email)) return 'Endereço de e-mail inválido.';
		return '';
	}

	// Setting up order number validation.
	function validateOrderNumber(orderNumber: string): string {
		if (orderNumber.length < 1) return 'Número do pedido inválido.';
		return '';
	}

	// Setting up error message.
	useEffect(() => {
		const hasErrors = [email, orderNumber].some(input => input.error !== '');
		if (hasErrors) {
			setError('Please correct the errors before proceeding.');
			return;
		}

		setError('');
	}, [email, orderNumber]);
	

	// Setting up error state.
	const [error, setError] = useState('Yes');

	// Setting up handle order function.
    function handleOrder() {
        router.push(`/track/${email.value}/${orderNumber.value}`);
    }

	// Returning component.
    return (
        <div className="flex flex-col mb-6 gap-y-8 w-[100%]">
            <InputText data={email}/>
            <InputText data={orderNumber}/>
            <RoundedButton text="Continuar" width="100%" onClick={handleOrder} disabled={error == '' ? false : true}/>
        </div>
    )
}