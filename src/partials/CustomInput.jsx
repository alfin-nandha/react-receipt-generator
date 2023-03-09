import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const CustomInput = ({ label, name, icon, onChange, type }) => {
    return (
        <div className="relative p-1 text-left w-11/12 m-auto">
            <label htmlFor={label} className="text-stone-700 block">{label}</label>
            <div className="absolute bottom-2 left-2 w-6 text-center">
                <FontAwesomeIcon icon={icon} />
                <div className="absolute top-0 w-full h-full bg-stone-100 bg-opacity-40"></div>
            </div>
            <input name={name} id={label} onChange={onChange} type={type} className="shadow-md px-2 w-full text-stone-600 rounded-lg placeholder:italic placeholder:text-sm pl-8 block h-8" placeholder="ex: INV/xxx/xxxxx" />
        </div>
    )
}
export default CustomInput