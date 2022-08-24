import React, { useState, useEffect } from "react";

function DecimalConverter() {
    const [decimalValue, setDecimalValue] = useState(0);
    const [binaryValue, setBinaryValue] = useState(0);
    const [octalValue, setOctalValue] = useState(0);
    const [hexaValue, setHexaValue] = useState(0);

    useEffect(() => {
        setBinaryValue(parseInt(decimalValue).toString(2));
        setOctalValue(parseInt(decimalValue).toString(8));
        setHexaValue(parseInt(decimalValue).toString(16));
    }, [decimalValue])

    return (
        <div className="decimal-converter pb-7">
            <h1 className="text-3xl font-bold text-center my-6">Decimal Converter</h1>
            <div className="converter-dec-to-bin w-4/5 md:w-2/3 m-auto my-5">
                <h2 className="font-semibold pb-3">Masukkan angka decimal disini</h2>
                <div className="decimal-to-binary flex gap-8">
                    <input type="number" onChange={(e) => setDecimalValue(e.target.value)} name="decimal" id="decimal" className="min-w-full p-4 border border-blue-300 rounded-lg" placeholder="Masukkan angka ..." />
                </div>
            </div>
            <div className="converter-dec-to-bin w-4/5 md:w-2/3 m-auto flex flex-wrap gap-5">
                <div className="w-full md:w-[48%]">
                    <h2 className="font-semibold pb-3">Binary</h2>
                    <input type="number" name="binaryResult" id="binaryResult" className="w-full p-4 bg-slate-100 border border-gray-500 rounded-lg focus:outline-none" value={binaryValue} readOnly />
                </div>
                <div className="w-full md:w-[48%]">
                    <h2 className="font-semibold pb-3">Octal</h2>
                    <input type="number" name="octalResult" id="octalResult" className="w-full p-4 bg-slate-100 border border-gray-500 rounded-lg focus:outline-none" value={octalValue} readOnly />
                </div>
                <div className="w-full md:w-[48%]">
                    <h2 className="font-semibold pb-3">Hexadecimal</h2>
                    <input type="number" name="hexaResult" id="hexaResult" className="w-full p-4 bg-slate-100 border border-gray-500 rounded-lg focus:outline-none" value={hexaValue} readOnly />
                </div>
            </div>
        </div>
    )
}

export default DecimalConverter;