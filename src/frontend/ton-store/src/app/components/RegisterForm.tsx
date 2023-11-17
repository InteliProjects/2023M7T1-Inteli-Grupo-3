import { useEffect, useState } from "react";
import InputText from "./InputText";
import { IInput } from "../interfaces/IInput";
import { useRouter } from "next/navigation";
import RoundedButton from "./RoundedButton";
import { API_BASE_URL } from '../config';


export default function RegisterForm(){

    // Getting router.
    const router = useRouter();

	// Defining the error state.
    const [error, setError] = useState('');

	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		email: '',
		password: '',
	  });

    const [name, setName] = useState<IInput>({
		id: 'name',
		name: 'name',
		placeholder: 'Nome',
		disabled: false,
		value: '',
		onChange: (e: any) => {
			const newValue = e.target.value;
			const error = validateName(newValue);
			setName((prevName) => ({
			  ...prevName,
			  value: newValue,
			  error,
			}));
		},
	});

    function validateName(name: string): string {
		if (!name.trim()) return 'O campo nome não pode estar vazio.';
		if (name.length < 3) return 'Nome muito curto.';
		if (name.length > 50) return 'Nome muito longo.';
		return '';
	}


    const [phone, setPhone] = useState<IInput>({
		id: 'phone',
		name: 'phone',
		placeholder: 'Telefone',
		disabled: false,
		value: '',
		onChange: (e: any) => {
			const newValue = e.target.value;
			const error = validatePhone(newValue);
			setPhone((prevEmail) => ({
			  ...prevEmail,
			  value: newValue,
			  error,
			}));
		},
	});

    function validatePhone(phone: string): string {
		if (!phone.trim()) return 'O campo nome não pode estar vazio.';
		if (phone.length < 11) return 'Número inválido.';
		if (phone.length > 11) return 'Há números demais.';
		return '';
	}

    

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

	// Setting up error message.
	useEffect(() => {
		const hasErrors = [name, phone, email, password].some(input => input.error !== '');
		if (hasErrors) {
			setError('Please correct the errors before proceeding.');
			return;
		}
		setError('');
	}, [name, phone, email, password]);

	const handleRegister = async () => {
		if (error !== '') {
		  return;
		}
	
		// Substitua esta parte com a chamada à API de autenticação
		try {
		  const response = await fetch(`${API_BASE_URL}/api/v1/auth/signup`, {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json',
			},
			body: JSON.stringify({
			  name: name.value,
			  telephone: phone.value,
			  email: email.value,
			  password: password.value,
			}),
			
		  });
		  
		  if (response.ok) {
			// Se a autenticação for bem-sucedida, obtém o token da resposta
			const data = await response.json();
			const token = data.auth.token; 	
			localStorage.setItem('token', token);
	
			// Redireciona para a página do painel após o login
			console.log(token)
			router.push('/');
		  } else {
			setError('Registration failed. Please try again.');
		  }
		} catch (error) {
		  console.error('Error during registration:', error);
		  setError('An error occurred during registration. Please try again later.');
		}
	  };

	// Setting up password validation.
	function validatePassword(password: string): string {
		const pattern = /^\w{7,14}$/;
		if (!pattern.test(password)) return 'A senha deve ter entre 7 e 14 caracteres.';
		return '';
	}
	// Defining function to handle order.

	// Returning component.
    return (
        <div className="flex flex-col mb-6 gap-y-5">
            <InputText data={name}/>
            <InputText data={phone}/>
            <InputText data={email}/>
            <InputText data={password}/>
            <RoundedButton text="Entrar" width="100%" onClick={handleRegister} bgColor='' disabled={error == '' ? false : true}/>
        </div>
    )
}