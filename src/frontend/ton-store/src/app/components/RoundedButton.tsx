// Importing required modules.
import { IRoundedButtonProps } from "../interfaces/IRoundedButtonProps";

// Exporting component.
export default function RoundedButton({ text, width, onClick, disabled, bgColor, borderColor} : IRoundedButtonProps) {

    return (
        <button disabled={disabled} className={`h-14 
                            ${bgColor ? bgColor : 'bg-[#00A868]'} 
                            rounded-full
                            cursor-pointer
                            transition
                            ease-in-out
                            duration-300 
                            hover:scale-110 
                            disabled:bg-[#F5F5F5]
                            disabled:text-[#757575]
                            disabled:cursor-not-allowed
							mb-4
							${borderColor ? borderColor : 'border-none'}
							${borderColor && !disabled ? 'border-2' : ''}
							${bgColor ? 'bg-[#00A868]' : 'text-white'}
                            ${width}`} onClick={onClick}> {text}</button>
    )
}