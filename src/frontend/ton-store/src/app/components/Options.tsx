// Setting the component to be rendered at the client side.
'use client';

// Importing all required modules.
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Options from '../../../public/options.svg';

// Exporting component.
export default function OptionsButton({orderId} : { orderId: string} ) {
	// Getting router.
	const router = useRouter();

	// Defining options state.
	const [isOptionsOpen, setIsOptionsOpen] = useState(false);

	// Defining functions to handle see order.
	const handleSeeOrder = () => {
		router.push(`/orders/${orderId}`);
	}

	// Defining function to handle click.
	const handleClick = () => {
		setIsOptionsOpen(!isOptionsOpen);
	}

	// Returning component.
	return (
		<button className="flex justify-center items-center w-8 h-8 rounded-full relative" onClick={handleClick}>
			<Image src={Options} alt="Options" />
			{isOptionsOpen && (
				<div className="absolute top-7 left-0 w-48 bg-white rounded-xl custom-shadow z-10 p-6">
					<div className="flex flex-col gap-y-2 p-4">
						<button className="text-sm text-[#000000] hover:scale-125 hover:font-semibold transition ease-in-out duration-300" onClick={handleSeeOrder}>Ver pedido</button>
					</div>
				</div>
			)}
		</button>
	)
}