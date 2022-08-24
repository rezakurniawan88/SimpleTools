import React, { useState, useEffect } from "react";
import NumberInput from "../../components/Input/NumberInput";
import ImutableNumberInput from "../../components/Input/ImutableNumberInput";

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
            <NumberInput title="Masukkan angka decimal disini" name="decimal" id="decimal" onChange={(e) => setDecimalValue(e.target.value)} />
            <div className="converter-dec-to-bin w-4/5 md:w-2/3 m-auto flex flex-wrap gap-5">
                <ImutableNumberInput title="Binary" name="binaryResult" id="binaryResult" value={binaryValue} />
                <ImutableNumberInput title="Octal" name="octalResult" id="octalResult" value={octalValue} />
                <ImutableNumberInput title="Hexadecimal" name="hexaResult" id="hexaResult" value={hexaValue} />
            </div>
        </div>
    )
}

export default DecimalConverter;