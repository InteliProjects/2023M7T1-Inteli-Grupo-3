// Purpose: Interface for rounded button props.
export interface IRoundedButtonProps {
    text: string;
    onClick: () => void;
    width: string;
    disabled?: boolean;
	bgColor ?: string;
	borderColor ?: string;
}