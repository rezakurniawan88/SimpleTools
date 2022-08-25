import React, { useState } from "react";
import InputComponent from "../../components/Input/InputComponent";
import ImutableInput from "../../components/Input/ImutableInput";

const MDHashEncode = () => {
    const [inputHash, setInputHash] = useState("");
    const [resultMd2, setResultMd2] = useState("");
    const [resultMd4, setResultMd4] = useState("");
    const [resultMd5, setResultMd5] = useState("");

    function encodeMdHash() {
        const url = "https://helloacm.com/api/hash/?cached&s=";
        document.getElementById("result").classList.add("animate-pulse");
        fetch(`${url}${inputHash}`)
        .then((res) => res.json())
        .then((data) => {
            setResultMd2(data.md2);
            setResultMd4(data.md4);
            setResultMd5(data.md5);
            document.getElementById("result").classList.remove("animate-pulse");
        });
    }

    return (
        <div className="md5">
            <h1 className="text-center text-2xl md:text-3xl dark:text-[#ccd6f6] font-bold my-5">MD Hash Encode</h1>
            <div className="container flex flex-col gap-8 items-center m-auto pb-10">
                <InputComponent name="encode" id="encode" content="Encode" onClick={encodeMdHash} onChange={(e) => setInputHash(e.target.value)} />
                <ImutableInput title="MD2" value={resultMd2} />
                <ImutableInput title="MD4" value={resultMd4} />
                <ImutableInput title="MD5" value={resultMd5} />
            </div>
        </div>
    )
}

export default MDHashEncode;