// Importing all required modules.
import React from 'react';
import Image from 'next/image';
import Ready from '../../../public/ready.svg';
import Shipped from '../../../public/shipped.svg';
import Checked from '../../../public/checked.svg';
import Delivered from '../../../public/delivered.svg';
import Processing from '../../../public/processing.svg';
import Rejected from '../../../public/rejected.svg';


// Exporting component.
const OrderTracker = ({ status } : { status: 'RECEIVED' | 'PAYMENT_ACCEPTED' | 'PAYMENT_REJECTED' }) => {
	// Defining possible statuses.
	const statuses = ['RECEIVED', 'PAYMENT_ACCEPTED', 'PAYMENT_REJECTED'];

	// Defining line length.
	const lineLength = 120;

	// Defining translated statuses.
	const translatedStatus: { [key: string]: string } = {
		RECEIVED: 'Recebido',
		PAYMENT_ACCEPTED: 'Confirmado',
		PAYMENT_REJECTED: 'Recusado',

	  };

	// Defining icons.
	const icons: { [key: string]: any } = {
		RECEIVED: Processing,
		RECEIPAYMENT_ACCEPTED: Shipped,
		PAYMENT_REJECTED: Rejected,

	  };

	// Returning component.
	return (
		<div className="relative flex flex-col items-center">
		<div className="absolute flex items-center" style={{ top: '30%', transform: 'translateY(-50%)' }}>
			{statuses.map((s, index) => (
			<React.Fragment key={s}>
				<div
				className={`relative rounded-full border-2 flex items-center justify-center ${
					status === s || statuses.indexOf(status) > index
					? 'bg-[#00A868] border-[#00A868]'
					: 'bg-white border-gray-400'
				}`}
				style={{
					width: status === s || statuses.indexOf(status) > index ? '44px' : '22px',
					height: status === s || statuses.indexOf(status) > index ? '44px' : '22px',
				}}
				>
				{status === s || statuses.indexOf(status) > index ? (
					<Image src={Checked} alt="checked icon" />
				) : null}
				</div>
				{index < statuses.length - 1 && (
				<div
					className={`h-2 ${statuses.indexOf(status) > index ? 'bg-[#00A868]' : 'bg-gray-400'}`}
					style={{ width: `${lineLength}px`, height: '2px' }}
				/>
				)}
			</React.Fragment>
			))}
		</div>
		<div className="flex flex-row justify-between mt-24" style={{ width: `${statuses.length * 44 + (statuses.length - 1) * lineLength}px` }}>
			{statuses.map((s, index) => (
			<div key={s} className="flex flex-col items-center">
				<div style={{ opacity: status === s || statuses.indexOf(status) > index ? 1 : 0.2 }}>
				<Image className="mb-2" src={icons[s]} alt={`${s} icon`} />
				</div>
				<p
				className={`text-sm font-medium ${
					status === s || statuses.indexOf(status) > index ? 'text-black' : 'text-gray-400'
				}`}
				>
				{translatedStatus[s]}
				</p>
			</div>
			))}
		</div>
		</div>
	);
};

// Exporting component.
export default OrderTracker;
