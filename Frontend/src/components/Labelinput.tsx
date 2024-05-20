import  { ChangeEvent } from 'react'

interface lableInoutType{
    label:string;
    placeholder:string;
    onchange:(e:ChangeEvent<HTMLInputElement>)=>void;
    type?:string;
}
const Labelinput= ({label,placeholder,onchange,type}:lableInoutType) => {
  return (
    <div className="max-w-lg mt-5">
        <div className="flex justify-between items-center">
            <label htmlFor="with-corner-hint" className="block text-sm font-medium mb-1">{label}</label>
        </div>
        <input onChange={onchange} type={type ||"text" } id="with-corner-hint" className="py-3 px-4 block w-full border-solid border-2 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder={placeholder}/>
    </div>
  )
}
 
export default Labelinput