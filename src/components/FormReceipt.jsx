import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartFlatbed, faCartShopping, faFileInvoice, faPlaneDeparture, faStore, faUserNinja } from "@fortawesome/free-solid-svg-icons"

const FormReceipt = () => {
    const navigate = useNavigate()

    const [data, setData] = useState({
        market: "TOKOPEDIA",
        courier: "ANTERAJA"
    })

    const setMarket = (e) => {
        setData(prevState => ({
            ...prevState,
            market: e.target.value
        }))
    }
    const setInvoice = (e) => {
        setData(prevState => ({
            ...prevState,
            invoice: e.target.value
        }))
    }
    const setCourier = (e) => {
        setData(prevState => ({
            ...prevState,
            courier: e.target.value
        }))
    }
    const setAwb = (e) => {
        setData(prevState => ({
            ...prevState,
            awb: e.target.value
        }))
    }
    const setCostumer = (e) => {
        setData(prevState => ({
            ...prevState,
            customer: e.target.value
        }))
    }
    const setOrder = (e) => {
        setData(prevState => ({
            ...prevState,
            order: e.target.value
        }))
    }

    const send = () => {
        navigate('/receipt', { state: { data: data } });
    }

    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <div className="min-w-screen min-h-screen bg-amber-50 py-2">
            <div className="text-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 border-2 border-amber-200 bg-amber-100 shadow-md rounded-xl min-h-max w-screen sm:w-[360px] pb-10">
                <h1 className="text-3xl font-bold underline mt-10 text-stone-700">KAFKACHIPS</h1>
                <form className="mt-6" method="POST" action="{{ route('contact.store') }}">
                    <div className="relative p-1 text-left w-11/12 m-auto">
                        <label htmlFor="market" className="text-stone-700 block">Marketplace</label>
                        <div className="absolute bottom-2 left-2 w-6 text-center">
                            <FontAwesomeIcon icon={faStore} />
                            <div className="absolute top-0 w-full h-full bg-stone-100 bg-opacity-40"></div>
                        </div>
                        <select onChange={setMarket} defaultValue="TOKOPEDIA" className="shadow-md px-2 w-full text-stone-600 rounded-lg pl-8 block h-8">
                            <option value="TOKOPEDIA">TOKOPEDIA</option>
                            <option value="SHOPEE">SHOPEE</option>
                        </select>
                    </div>
                    <div className="relative p-1 text-left w-11/12 m-auto">
                        <label htmlFor="invoice" className="text-stone-700 block">Invoice</label>
                        <div className="absolute bottom-2 left-2 w-6 text-center">
                            <FontAwesomeIcon icon={faFileInvoice} />
                            <div className="absolute top-0 w-full h-full bg-stone-100 bg-opacity-40"></div>
                        </div>
                        <input onChange={setInvoice} type="text" className="shadow-md px-2 w-full text-stone-600 rounded-lg placeholder:italic placeholder:text-sm pl-8 block h-8" placeholder="ex: INV/xxx/xxxxx" />
                    </div>
                    <div className="relative p-1 text-left w-11/12 m-auto">
                        <label htmlFor="courier" className="text-stone-700 block">Courier</label>
                        <div className="absolute bottom-2 left-2 w-6 text-center">
                            <FontAwesomeIcon icon={faCartFlatbed} />
                            <div className="absolute top-0 w-full h-full bg-stone-100 bg-opacity-40"></div>
                        </div>
                        <select onChange={setCourier} className="shadow-md px-2 w-full text-stone-600 rounded-lg pl-8 block h-8">
                            <option value="ANTERAJA">ANTERAJA</option>
                            <option value="SICEPAT">SICEPAT</option>
                            <option value="JNT">JNT</option>
                            <option value="ID-EXPRESS">ID-EXPRESS</option>
                        </select>
                    </div>
                    <div className="relative p-1 text-left w-11/12 m-auto">
                        <label htmlFor="awb" className="text-stone-700 block">Air Way Bill</label>
                        <div className="absolute bottom-2 left-2 w-6 text-center">
                            <FontAwesomeIcon icon={faPlaneDeparture} />
                            <div className="absolute top-0 w-full h-full bg-stone-100 bg-opacity-40"></div>
                        </div>
                        <input onChange={setAwb} type="text" className="shadow-md px-2 w-full text-stone-600 rounded-lg placeholder:italic placeholder:text-sm pl-8 block h-8" placeholder="ex: 1001231xxx" />
                    </div>
                    <div className="relative p-1 text-left w-11/12 m-auto">
                        <label htmlFor="customer" className="text-stone-700 block">Customer Name</label>
                        <div className="absolute bottom-2 left-2 w-6 text-center">
                            <FontAwesomeIcon icon={faUserNinja} />
                            <div className="absolute top-0 w-full h-full bg-stone-100 bg-opacity-40"></div>
                        </div>
                        <input onChange={setCostumer} type="text" className="shadow-md px-2 w-full text-stone-600 rounded-lg placeholder:italic placeholder:text-sm pl-8 block h-8" placeholder="ex: andi" />
                    </div>
                    <div className="relative p-1 text-left w-11/12 m-auto">
                        <label htmlFor="order" className="text-stone-700 block">Detail Orders</label>
                        <div className="absolute top-8 left-2 w-6 text-center">
                            <FontAwesomeIcon icon={faCartShopping} />
                            <div className="absolute top-0 w-full h-full bg-stone-100 bg-opacity-40"></div>
                        </div>
                        <textarea onChange={setOrder} cols="30" rows="10" className="shadow-md px-2 py-1 w-full text-stone-600 rounded-lg placeholder:italic placeholder:text-sm pl-8 block h-32" placeholder="ex: 1 Nangka A 500g"></textarea>
                    </div>
                    <div className="relative w-1/3 h-8 rounded-md bg-slate-700 m-auto mt-5">
                        <button onClick={send} className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-slate-100" >send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default FormReceipt