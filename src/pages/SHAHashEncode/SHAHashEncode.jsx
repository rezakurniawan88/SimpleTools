import React, { useState } from "react";
import InputComponent from "../../components/Input/InputComponent";
import ImutableInput from "../../components/Input/ImutableInput";

const SHAHashEncode = () => {
    const [inputHash, setInputHash] = useState("");
    const [resultSha1, setResultSha1] = useState("");
    const [resultSha224, setResultSha224] = useState("");
    const [resultSha256, setResultSha256] = useState("");
    const [resultSha384, setResultSha384] = useState("");
    const [resultSha512, setResultSha512] = useState("");

    function encodeShaHash() {
        const url = "https://helloacm.com/api/hash/?cached&s=";
        document.getElementById("result").classList.add("animate-pulse");
        fetch(`${url}${inputHash}`)
        .then((res) => res.json())
        .then((data) => {
            setResultSha1(data.sha1);
            setResultSha224(data.sha224);
            setResultSha256(data.sha256);
            setResultSha384(data.sha384);
            setResultSha512(data.sha512);
            document.getElementById("result").classList.remove("animate-pulse");
        });
    }

    return (
        <div className="sha">
            <h1 className="text-center text-2xl md:text-3xl dark:text-[#ccd6f6] font-bold my-5">SHA Hash Encode</h1>
            <div className="container flex flex-col gap-8 items-center m-auto pb-10">
                <InputComponent name="encode" id="encode" content="Encode" onClick={encodeShaHash} onChange={(e) => setInputHash(e.target.value)} />
                <ImutableInput title="SHA-1" value={resultSha1} />
                <ImutableInput title="SHA-224" value={resultSha224} />
                <ImutableInput title="SHA-256" value={resultSha256} />
                <ImutableInput title="SHA-384" value={resultSha384} />
                <ImutableInput title="SHA-512" value={resultSha512} />
            </div>
        </div>
    )
}

export default SHAHashEncode;