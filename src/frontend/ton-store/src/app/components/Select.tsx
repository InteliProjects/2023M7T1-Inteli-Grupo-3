// Importing required modules.
import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

// Exporting component.
export default function Select({ name, id, placeholder, disabled, options } : { name: string, id: string, placeholder: string, disabled?: boolean, options: any[]}) {
	// Setting up selected option.
	const [selected, setSelected] = useState(options[0])
  	const [query, setQuery] = useState('')

	// Filtering options.
	const filteredPeople =
		query === ''
		? options
		: options.filter((option) =>
			option.name
				.toLowerCase()
				.replace(/\s+/g, '')
				.includes(query.toLowerCase().replace(/\s+/g, ''))
			)
	// Returning component.
	return (
		<div className='relative'>
			<Combobox value={selected} onChange={setSelected}>
				<Combobox.Input
					className="h-14 w-[100%] p-4 outline-none rounded-md border-[1px] border-[#CCCCCC] text-base placeholder-black"
					displayValue={(option : {id : string, name : string}) => option.name}
					onChange={(event) => setQuery(event.target.value)}
				/>
				<Combobox.Button >
					<ChevronUpDownIcon
					className="h-5 w-5 text-gray-400 absolute right-2 top-4"
					aria-hidden="true"
					/>
				</Combobox.Button>
				<Transition
					as={Fragment}
					leave="transition ease-in duration-100"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
					afterLeave={() => setQuery('')}
				>
					<Combobox.Options className="z-50 absolute mt-1 w-[100%] max-h-48 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
					{filteredPeople.length === 0 && query !== '' ? (
						<div className="relative cursor-default select-none py-2 px-4 text-gray-700">
						Nothing found.
						</div>
					) : (
						filteredPeople.map((option) => (
						<Combobox.Option
							key={option.id}
							className={({ active }) =>
							`relative cursor-pointer select-none py-2 pl-10 pr-4 ${
								active ? 'bg-black text-white' : 'text-gray-900'
							}`
							}
							value={option}
						>
							{({ selected, active }) => (
							<>
								<span
								className={`block truncate ${
									selected ? 'font-medium' : 'font-normal'
								}`}
								>
								{option.name}
								</span>
								{selected ? (
								<span
									className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
									active ? 'text-white' : 'text-black'
									}`}
								>
									<CheckIcon className="h-5 w-5" aria-hidden="true" />
								</span>
								) : null}
							</>
							)}
						</Combobox.Option>
						))
					)}
					</Combobox.Options>
				</Transition>
			</Combobox>
		</div>
	)
}
