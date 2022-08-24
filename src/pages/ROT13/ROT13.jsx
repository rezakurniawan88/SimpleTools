import React, { useState } from "react";
import InputComponent from "../../components/Input/InputComponent";

function ROT13() {
    const [encodeVal, setEncodeVal] = useState("");
    const [decodeVal, setDecodeVal] = useState("");

    function encodeRot13() {
        const input = document.getElementById("encode").value;
        const alphabet = "abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM";
        setEncodeVal(input.replace(/[a-z]/gi, letter => alphabet[alphabet.indexOf(letter) + 13]));
    }

    function decodeRot13() {
        const input = document.getElementById("decode").value;
        const alphabet = "zyxwvutsrqponmlkjihgfedcbazyxwvutsrqponZYXWVUTSRQPONMLKJIHGFEDCBAZYXWVUTSRQPON";
        setDecodeVal(input.replace(/[a-z]/gi, letter => alphabet[alphabet.indexOf(letter) + 13]));
    }

    return (
        <div className="rot13">
            <h1 className="text-center text-3xl font-bold my-5">ROT13 Encode/Decode</h1>
            <div className="container flex flex-col gap-8 items-center m-auto">
                <InputComponent name="encode" id="encode" value={decodeVal === "" ? null : decodeVal} content="Encode" onClick={encodeRot13} />
                <InputComponent name="decode" id="decode" value={encodeVal === "" ? null : encodeVal} content="Decode" onClick={decodeRot13} />
            </div>
        </div>
    )
}

export default ROT13;