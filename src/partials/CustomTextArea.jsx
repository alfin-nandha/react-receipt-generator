import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const CustomTextArea = ({ label, name, icon, onChange }) => {
    return (
        <div className="relative p-1 text-left w-11/12 m-auto">
            <label htmlFor={label} className="text-stone-700 block">{label}</label>
            <div className="absolute top-8 left-2 w-6 text-center">
                <FontAwesomeIcon icon={icon} />
                <div className="absolute top-0 w-full h-full bg-stone-100 bg-opacity-40"></div>
            </div>
            <textarea name={name} id={label} onChange={onChange} cols="30" rows="10" className="shadow-md px-2 py-1 w-full text-stone-600 rounded-lg placeholder:italic placeholder:text-sm pl-8 block h-32" placeholder="ex: 1 Nangka A 500g"></textarea>
        </div>
    )
}
export default CustomTextArea