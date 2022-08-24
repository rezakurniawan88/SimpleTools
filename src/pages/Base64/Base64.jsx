import React, { useState } from "react";
import InputComponent from "../../components/Input/InputComponent";

function Base64() {
    const [encodeVal, setEncodeVal] = useState("");
    const [decodeVal, setDecodeVal] = useState("");

    function encode() {
        const encodeValue = document.getElementById("encode").value;
        setEncodeVal(btoa(encodeValue));
    }

    function decode() {
        const decodeValue = document.getElementById("decode").value;
        setDecodeVal(atob(decodeValue));
    }
    // border border-[#64ffda]
    return (
        <div className="content">
            <h1 className="text-center text-3xl dark:text-[#ccd6f6] font-bold my-5">BASE64 Encode/Decode</h1>
            <div className="container flex flex-col gap-8 items-center m-auto">
                <InputComponent name="encode" id="encode" value={decodeVal === "" ? null : decodeVal} content="Encode" onClick={encode} />
                <InputComponent name="decode" id="decode" value={encodeVal === "" ? null : encodeVal} content="Decode" onClick={decode} />
            </div>
        </div>
    )
}

export default Base64;