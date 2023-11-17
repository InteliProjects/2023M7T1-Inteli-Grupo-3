// Setting the component to be rendered at the client side.
"use client"

// Importing all required modules.
import InputText from "./InputText"
import { useEffect, useState } from "react";
import RoundedButton from "./RoundedButton";
import { useRouter } from "next/navigation";
import { IInput } from "../interfaces/IInput";
import { API_BASE_URL } from '../config';



// Exporting component.
export default function LoginForm() {

	// Getting router.
    const router = useRouter();

	// Defining the error state.
    const [error, setError] = useState('');

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

	// Setting up email validation.
	function validateEmail(email: string): string {
		const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
		if (!pattern.test(email)) return 'Endereço de e-mail inválido.';
		return '';
	}

	// Setting up password input.
	const [password, setPassword] = useState<IInput>({
		id: 'password',
		name: 'password',
		placeholder: 'Senha',
		disabled: false,
		value: '',
		type: 'password',
		onChange: (e: any) => {
			const newValue = e.target.value;
			const error = validatePassword(newValue);
			setPassword((prevPassword) => ({
			  ...prevPassword,
			  value: newValue,
			  error,
			}));
		}
	});

	// Setting up password validation.
	function validatePassword(password: string): string {
		const pattern = /^\w{7,14}$/;
		if (!pattern.test(password)) return 'A senha deve ter entre 7 e 14 caracteres.';
		return '';
	}

	// Setting up error message.
	useEffect(() => {
		const hasErrors = [email, password].some((input) => input.error !== '');
		if (hasErrors) {
		  setError('Please correct the errors before proceeding.');
		} else {
		  setError('');
		}
	  }, [email, password]);
	
	  const handleOrder = async () => {
		if (error !== '') {
		  return;
		}
	
		// Substitua esta parte com a chamada à API de autenticação
		try {
		  const response = await fetch(`${API_BASE_URL}/api/v1/auth`, {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json',
			},
			body: JSON.stringify({
			  email: email.value,
			  password: password.value,
			}),
			
		  });

	
		  if (response.ok) {
			// Se a autenticação for bem-sucedida, obtém o token da resposta
			const data = await response.json();
			const token = data.access_token; 	
			localStorage.setItem('token', token);
	
			// Redireciona para a página do painel após o login
			console.log(token)
			router.push('/');
		  } else {
			setError('Authentication failed. Please check your credentials.');
		  }
		} catch (error) {
		  console.error('Error during authentication:', error);
		  setError('An error occurred during authentication. Please try again later.');
		}
	  };

	// Returning component.
    return (
        <div className="flex flex-col mb-6 gap-y-5">
            <InputText data={email}/>
            <InputText data={password}/>
            <RoundedButton text="Entrar" width="100%" onClick={handleOrder} bgColor='' disabled={error == '' ? false : true}/>
        </div>
    )
}