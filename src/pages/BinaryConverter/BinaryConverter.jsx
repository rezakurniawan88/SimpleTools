import React, { useState, useEffect } from "react";
import NumberInput from "../../components/Input/NumberInput";
import ImutableNumberInput from "../../components/Input/ImutableNumberInput";

function BinaryConverter() {
    const [binaryValue, setBinaryValue] = useState(0);
    const [octalValue, setOctalValue] = useState(0);
    const [decimalValue, setDecimalValue] = useState(0);
    const [hexaValue, setHexaValue] = useState(0);

    useEffect(() => {
        setDecimalValue(parseInt(binaryValue, 10));
        setOctalValue(parseInt(binaryValue).toString(8));
        setHexaValue(parseInt(binaryValue).toString(16));
    }, [binaryValue])

    return (
        <div className="binary-converter pb-7">
            <h1 className="text-2xl md:text-3xl dark:text-[#ccd6f6] font-bold text-center my-6">Binary Converter</h1>
            <NumberInput title="Masukkan angka binary disini" name="binary" id="binary" onChange={(e) => setBinaryValue(e.target.value)} />
            <div className="converter-dec-to-bin w-4/5 md:w-2/3 m-auto flex flex-wrap gap-5">
                <ImutableNumberInput title="Octal" name="octalResult" id="octalResult" value={octalValue} />
                <ImutableNumberInput title="Decimal" name="decimalResult" id="decimalResult" value={decimalValue} />
                <ImutableNumberInput title="Hexadecimal" name="hexaResult" id="hexaResult" value={hexaValue} />
            </div>
        </div>
    )
}

export default BinaryConverter;