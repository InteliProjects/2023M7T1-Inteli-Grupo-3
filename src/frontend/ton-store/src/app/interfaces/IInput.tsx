// Purpose: Interface for Input component.
export interface IInput {
	id: string;
	name: string;
	placeholder: string;
	disabled?: boolean;
	value: string;
	onChange : (e : any) => void;
	type ?: string;
	error ?: string;
	onFocus ?: () => void;
}