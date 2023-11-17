// Importing required modules.
import { IInput } from "../interfaces/IInput"

// Exporting component.
export default function InputText({data} : { data : IInput }) {
  
    return (
            <div className="relative flex items-center w-[100%] z-[0]">
                <input className={`z-0 w-[100%] h-14 p-4 outline-none rounded-md border border-gray-300 text-base placeholder-black ${data.disabled ? 'bg-gray-200 cursor-not-allowed' : ''}`}
                    type={data.type ? data.type : "text"} name={data.name} id={data.id} placeholder={data.placeholder} autoComplete="off" disabled={data.disabled} value={data.value} onChange={data.onChange} onFocus={data.onFocus}/>
                {data.error && 
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center" title={data.error}>
                        <p className="text-white text-xs font-bold">!</p>
                    </div>
                }
            </div>
        
    )
}
