// Setting the file to be rendered at the client side.
"use client"

// Importing all required modules. 
import { useState } from "react";
import InputText from "./InputText";
import RoundedButton from "./RoundedButton";
import { useRouter } from "next/navigation";
import { IInput } from "../interfaces/IInput";

// Exporting component.
export default function ShippingDetailsForm() {
	// Getting router.
    const router = useRouter();

	// Defining the error state. 
    const [error, setError] = useState('');

	// Setting up card owner full name input.
	const [cardOwnerFullName, setCardOwnerFullName] = useState<IInput>({
		id: 'card-owner-full-name',
		name: 'card-owner-full-name',
		placeholder: 'Nome como impresso no cartão',
		disabled: false,
		value: '',
		onChange: (e: any) => {
			const newValue = e.target.value;
			const error = validateCardOwnerFullName(newValue);
			setCardOwnerFullName((prevCardOwnerFullName) => ({
			  ...prevCardOwnerFullName,
			  value: newValue,
			  error,
			}));
		  }
	});

	// Setting up card number input.
	const [cardNumber, setCardNumber] = useState<IInput>({
		id: 'card-number',
		name: 'card-number',
		placeholder: 'Número do cartão de crédito',
		disabled: false,
		value: '',
		onChange: (e: any) => {
			const newValue = e.target.value;
			const error = validateCardNumber(newValue);
			setCardNumber((prevCardNumber) => ({
			  ...prevCardNumber,
			  value: newValue,
			  error,
			}));
		  }
	});

	// Setting up card expiration date input.
	const [cardExpirationDate, setCardExpirationDate] = useState<IInput>({
		id: 'card-expiration-date',
		name: 'card-expiration-date',
		placeholder: 'Data de expiração',
		disabled: false,
		value: '',
		onChange: (e: any) => {
			const newValue = e.target.value;
			const error = validateCardExpirationDate(newValue);
			setCardExpirationDate((prevCardExpirationDate) => ({
			  ...prevCardExpirationDate,
			  value: newValue,
			  error,
			}));
		  }
	});

	// Setting up card security code input.
	const [cardSecurityCode, setCardSecurityCode] = useState<IInput>({
		id: 'cvv',
		name: 'cvv',
		placeholder: 'Código de segurança',
		disabled: false,
		value: '',
		onChange: (e: any) => {
			const newValue = e.target.value;
			const error = validateCardSecurityCode(newValue);
			setCardSecurityCode((prevCardSecurityCode) => ({
			  ...prevCardSecurityCode,
			  value: newValue,
			  error,
			}));
		  }
	});

	// Setting up card owner full name validation.
	function validateCardOwnerFullName(name: string): string {
		if (!name.trim()) return 'O campo nome não pode estar vazio.';
		if (name.length < 3) return 'Nome muito curto.';
		if (name.length > 50) return 'Nome muito longo.';
		return '';
	}

	// Setting up card number validation.
	function validateCardNumber(cardNumber: string): string {
		if (!cardNumber.trim()) return 'O campo número do cartão não pode estar vazio.';
		if (cardNumber.length < 16) return 'Número do cartão inválido.';
		if (cardNumber.length > 16) return 'Número do cartão inválido.';
		return '';
	}

	// Setting up card expiration date validation.
	function validateCardExpirationDate(cardExpirationDate: string): string {
		const pattern = new RegExp('^(0[1-9]|1[0-2])\/([0-9]{4}|[0-9]{2})$');
		if (!cardExpirationDate.trim()) return 'O campo data de expiração não pode estar vazio.';
		if (!pattern.test(cardExpirationDate)) return 'Data de expiração inválida. Use o formato MM/AAAA.';
		return '';
	}

	// Setting up card security code validation.
	function validateCardSecurityCode(cardSecurityCode: string): string {
		if (!cardSecurityCode.trim()) return 'O campo código de segurança não pode estar vazio.';
		if (cardSecurityCode.length < 3) return 'Código de segurança inválido.';
		if (cardSecurityCode.length > 3) return 'Código de segurança inválido.';
		return '';
	}

	// Setting up order handler.
    function handleOrder() {
        router.push('/checkout/success');
    }

	// Returning component.
    return (
        <div className="flex flex-col mb-6 gap-y-8 w-[100%]">
            <h1 className="text-2xl">Informações de pagamento:</h1>
            <InputText data={cardOwnerFullName}/>
            <InputText data={cardNumber}/>
            <div className="grid grid-cols-2 gap-x-4 gap-y-8">
                <InputText data={cardExpirationDate}/>
                <InputText data={cardSecurityCode}/>
            </div>
            <RoundedButton text="Finalizar compra" width="100%" onClick={handleOrder} disabled={error == '' ? false : true}/>
        </div>
    )
}