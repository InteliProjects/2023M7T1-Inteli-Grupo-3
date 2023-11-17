// Setting up the current page to be rendered at client side.
"use client"

// Importing modules.
import Select from "./Select";
import InputText from "./InputText";
import RoundedButton from "./RoundedButton";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { IInput } from "../interfaces/IInput";

// Exporting component.
export default function ShippingDetailsForm() {
	// Getting router.
    const router = useRouter();

	// Setting up first name input.
    const [firstName, setFirstName] = useState<IInput>({
		id: 'first-name',
		name: 'first-name',
		placeholder: 'Nome',
		disabled: false,
		value: '',
		onChange: (e: any) => {
			const newValue = e.target.value;
			const error = validateName(newValue);
			setFirstName((prevFirstName) => ({
			  ...prevFirstName,
			  value: newValue,
			  error,
			}));
		  },
	});

	// Setting up last name input.
	const [lastName, setLastName] = useState<IInput>({
		id: 'last-name',
		name: 'last-name',
		placeholder: 'Sobrenome',
		disabled: false,
		value: '',
		onChange: (e: any) => {
			const newValue = e.target.value;
			const error = validateLastName(newValue);
			setLastName((prevLastName) => ({
			  ...prevLastName,
			  value: newValue,
			  error,
			}));
		  },
	});

	// Setting up address input.
	const [address, setAddress] = useState<IInput>({
		id: 'address',
		name: 'address',
		placeholder: 'Endereço',
		disabled: false,
		value: '',
		onChange: (e: any) => {
			const newValue = e.target.value;
			const error = validateAddress(newValue);
			setAddress((prevAddress) => ({
			  ...prevAddress,
			  value: newValue,
			  error,
			}));
		  },
	});

	// Setting up zip code input.
	const [zipCode, setZipCode] = useState<IInput>({
		id: 'zip-code',
		name: 'zip-code',
		placeholder: 'CEP',
		disabled: false,
		value: '',
		onChange: (e: any) => {
			const newValue = e.target.value;
			const error = validateZipCode(newValue);
			setZipCode((prevZipCode) => ({
			  ...prevZipCode,
			  value: newValue,
			  error,
			}));
		  },
	});

	// Setting up neighborhood input.
	const [neighborhood, setNeighborhood] = useState<IInput>({
		id: 'neighborhood',
		name: 'neighborhood',
		placeholder: 'Bairro',
		disabled: false,
		value: '',
		onChange: (e: any) => {
			const newValue = e.target.value;
			const error = validateNeighborhood(newValue);
			setNeighborhood((prevNeighborhood) => ({
			  ...prevNeighborhood,
			  value: newValue,
			  error,
			}));
		  },
	});

	// Setting up country input.
	const [country, setCountry] = useState<IInput>({
		id: 'country',
		name: 'country',
		placeholder: 'País',
		disabled: true,
		value: 'Brasil',
		onChange: (e: any) => {
			const newValue = e.target.value;
			setCountry((prevCountry) => ({
			  ...prevCountry,
			  value: newValue,
			}));
		  }
	});

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

	// Setting up phone input.
	const [phone, setPhone] = useState<IInput>({
		id: 'phone',
		name: 'phone',
		placeholder: 'Telefone',
		disabled: false,
		value: '',
		onChange: (e: any) => {
			const newValue = e.target.value;
			const error = validatePhone(newValue);
			setPhone((prevPhone) => ({
			  ...prevPhone,
			  value: newValue,
			  error,
			}));
		  },
	});

	// Setting up name validation.
	function validateName(name: string): string {
		if (!name.trim()) return 'O campo nome não pode estar vazio.';
		if (name.length < 3) return 'Nome muito curto.';
		if (name.length > 50) return 'Nome muito longo.';
		return '';
	}

	// Setting up last name validation.
	function validateLastName(lastName: string): string {
		if (!lastName.trim()) return 'O campo sobrenome não pode estar vazio.';
		if (lastName.length < 3) return 'Sobrenome muito curto.';
		if (lastName.length > 50) return 'Sobrenome muito longo.';
		return '';
	}

	// Setting up address validation.
	function validateAddress(address: string): string {
		if (!address.trim()) return 'O campo endereço não pode estar vazio.';
		if (address.length < 3) return 'Endereço muito curto.';
		if (address.length > 50) return 'Endereço muito longo.';
		return '';
	}

	// Setting up neighborhood validation.
	function validateNeighborhood(neighborhood: string): string {
		if (!neighborhood.trim()) return 'O campo bairro não pode estar vazio.';
		if (neighborhood.length < 3) return 'Bairro muito curto.';
		if (neighborhood.length > 50) return 'Bairro muito longo.';
		return '';
	}
	
	// Setting up email validation.
	function validateEmail(email: string): string {
		const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
		if (!pattern.test(email)) return 'Endereço de e-mail inválido.';
		return '';
	}
	
	// Setting up zip code validation.
	function validateZipCode(zipCode: string): string {
		const pattern = /^[0-9]{5}-[0-9]{3}$/;
		if (!pattern.test(zipCode)) return 'Código postal inválido. Utilize o formato XXXXX-XXX.';
		return '';
	}
	
	// Setting up phone validation.
	function validatePhone(phone: string): string {
		const pattern = /^\(?\d{2}\)?[\s.-]?\d{4,5}[\s.-]?\d{4}$/;
		if (!pattern.test(phone)) return 'Número de telefone inválido. Lembre-se de utilizar o formato (XX) XXXXX-XXXX.';
		return '';
	}

	// Setting up error message.
	useEffect(() => {
		const hasErrors = [firstName, lastName, address, zipCode, neighborhood, email, phone].some(input => input.error !== '');
		if (hasErrors) {
			setError('Please correct the errors before proceeding.');
			return;
		}

		setError('');
	}, [firstName, lastName, address, zipCode, neighborhood, email, phone]);
	
	// Setting up error state.
	const [error, setError] = useState('Yes');

	// Handling order.
	function handleOrder() {
		router.push('/checkout/payment');
	  }
	  
	// Returning component.
    return (
        <div className="flex flex-col mb-6 gap-y-8 w-[100%]">
            <h1 className="text-2xl">Digite seu nome e endereço:</h1>
            <InputText data={firstName} />
            <InputText data={lastName} />
            <InputText data={address} />
            <div className="grid grid-cols-2 gap-x-4 gap-y-8">
                <InputText data={zipCode} />
                <InputText data={neighborhood} />
                <Select name="state" id="state" placeholder="Estado" options={[
                    {id: 1, name: "Acre"}, 
                    {id: 2, name: "Alagoas"}, 
                    {id: 3, name: "Amapá"}, 
                    {id: 4, name: "Amazonas"}, 
                    {id: 5, name: "Bahia"}, 
                    {id: 6, name: "Ceará"}, 
                    {id: 7, name: "Distrito Federal"}, 
                    {id: 8, name: "Espírito Santo"}, 
                    {id: 9, name: "Goiás"}, 
                    {id: 10, name: "Maranhão"}, 
                    {id: 11, name: "Mato Grosso"}, 
                    {id: 12, name: "Mato Grosso do Sul"}, 
                    {id: 13, name: "Minas Gerais"}, 
                    {id: 14, name: "Pará"}, 
                    {id: 15, name: "Paraíba"}, 
                    {id: 16, name: "Paraná"}, 
                    {id: 17, name: "Pernambuco"}, 
                    {id: 18, name: "Piauí"}, 
                    {id: 19, name: "Rio de Janeiro"}, 
                    {id: 20, name: "Rio Grande do Norte"}, 
                    {id: 21, name: "Rio Grande do Sul"}, 
                    {id: 22, name: "Rondônia"}, 
                    {id: 23, name: "Roraima"}, 
                    {id: 24, name: "Santa Catarina"}, 
                    {id: 25, name: "São Paulo"}, 
                    {id: 26, name: "Sergipe"}, 
                    {id: 27, name: "Tocantins"}
                ]}/>
                <InputText data={country}/>
            </div>
            <h1 className="text-2xl">Qual é a sua informação de contato?</h1>
            <InputText data={email} />
            <InputText data={phone} />
            <RoundedButton text="Continuar" width="100%" onClick={handleOrder} disabled={error == '' ? false : true}/>
        </div>
    )
}