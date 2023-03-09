import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { faCartFlatbed, faCartShopping, faFileInvoice, faPlaneDeparture, faStore, faUserNinja } from "@fortawesome/free-solid-svg-icons"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import CustomInput from "../partials/CustomInput"
import CustomDropdown from "../partials/CustomDropdown"
import CustomTextArea from "../partials/CustomTextArea"

const FormReceipt = () => {

    const navigate = useNavigate()
    const marketOption = ["TOKOPEDIA", "SHOPEE"]
    const courierOption = ["ANTERAJA", "SICEPAT", "JNT", "ID_EXPRESS"]
    const [data, setData] = useState({
        market: "TOKOPEDIA",
        courier: "ANTERAJA"
    })

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const validation = () => {
        if (!data.market) {
            toast.error("empty marketplace")
            return false
        }
        if (!data.invoice) {
            toast.error("empty invoice")
            return false
        }
        if (!data.courier) {
            toast.error("empty courier")
            return false
        }
        if (!data.awb) {
            toast.error("empty awb")
            return false
        }
        if (!data.customer) {
            toast.error("empty customer")
            return false
        }
        if (!data.order) {
            toast.error("empty order")
            return false
        }
        return true
    }

    const send = () => {

        if (validation()) {
            navigate('/receipt', { state: { data: data } });
        }
    }

    useEffect(() => {
        console.log(data)
    }, [data])

    return (

        <div className="min-w-screen min-h-screen bg-amber-50 p-2">
            <div className="text-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 border-2 border-amber-200 bg-amber-100 shadow-md rounded-xl min-h-max w-screen sm:w-[360px] pb-10">
                <h1 className="text-3xl font-bold underline mt-10 text-stone-700">KAFKACHIPS</h1>
                <div className="mt-6">
                    <CustomDropdown label="Marketplace" name="market" defaultValue="TOKOPEDIA" icon={faStore} options={marketOption} onChange={handleChange} />
                    <CustomInput label="Invoice" name="invoice" icon={faFileInvoice} onChange={handleChange} type="text" />
                    <CustomDropdown label="Courier" name="courier" defaultValue="ANTERAJA" icon={faCartFlatbed} options={courierOption} onChange={handleChange} />
                    <CustomInput label="Air Way Bill" name="awb" icon={faPlaneDeparture} onChange={handleChange} type="text" />
                    <CustomInput label="Customer Name" name="customer" icon={faUserNinja} onChange={handleChange} type="text" />
                    <CustomTextArea label="Detail Orders" name="order" icon={faCartShopping} onChange={handleChange} />
                    <div className="relative w-1/3 h-12 rounded-md bg-slate-600 hover:bg-slate-700 m-auto mt-5 hover:cursor-pointer shadow-xl">
                        <button onClick={send} className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-xl text-slate-100 hover:cursor-pointer" >Generate</button>
                    </div>
                </div>
            </div>
            <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
        </div>

    )
}
export default FormReceipt