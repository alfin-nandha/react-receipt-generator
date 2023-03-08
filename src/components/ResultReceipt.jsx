import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import bwipjs from 'bwip-js';

const ResultReceipt = () => {

    const location = useLocation()
    const navigate = useNavigate()

    const data = location.state.data

    const generate = () => {
        let canvas = document.getElementById('mycanvas');
        try {
            bwipjs.toCanvas(canvas, {
                bcid: 'code128',       // Barcode type
                text: data.awb,    // Text to encode
                scale: 3,               // 3x scaling factor
                height: 10,              // Bar height, in millimeters
                includetext: false,            // Show human-readable text
            });
            document.getElementById('myimg').src = canvas.toDataURL('image/png');
        } catch (e) {
            console.log(e);
        }
    }

    const back = () => {
        navigate('/', { state: { data: data } })
    }

    useEffect(() => {
        generate()
    }, [])

    return (
        <div className="mt-2 absolute left-1/2 -translate-x-1/2 text-center w-screen sm:w-[360px] py-4 px-2">
            <div className="border-2">

                <div className="text-4xl mt-4 font-bold underline">
                    {data.market}
                </div>
                <div className="mt-1 italic">
                    {data.invoice}
                </div>
                <div className="mt-3 font-semibold text-xl">
                    {data.courier}
                </div>
                <div id="my-img" className="w-11/12 m-auto mt-2 object-fill">
                    <img id="myimg" className="object-fill w-full h-28 m-auto" alt="barcode" />
                    <canvas id="mycanvas" className="m-auto hidden"></canvas>
                </div>
                <div className="mt-1 font-md text-lg">
                    {data.awb}
                </div>
                <div className="mt-2 font-semibold text-xl">
                    {data.customer}
                </div>
                <hr className="my-2 mx-4 border-dashed border-stone-600" />
                <div className="w-1/2 ml-7 text-left text-base whitespace-pre">
                    {data.order}
                </div>
                <hr className="my-2 mx-4 border-dashed border-stone-600" />
                <div className="italic underline my-4 text-xs">
                    "KAFKACHIPS"<br />
                    Diproduksi Oleh DutaChips
                </div>
            </div>
            <button className="mx-auto mt-4 bg-slate-50 hover:bg-slate-100 border-slate-100 border-2 py-1 px-3 rounded-md" onClick={back}>
                <span className="block">back / create new receipt</span>
            </button>
        </div>
    )
}
export default ResultReceipt