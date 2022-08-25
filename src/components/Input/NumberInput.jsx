import React from "react";

const NumberInput = ({title, name, id, onChange}) => {
    return (
        <div className="w-4/5 md:w-2/3 m-auto my-5">
            <h2 className="font-semibold pb-3 dark:text-[#ccd6f6]">{title}</h2>
            <div className="flex gap-8">
                <input type="number" onChange={onChange} name={name} id={id} className="min-w-full p-4 border border-green-500 rounded-lg" placeholder="Masukkan angka ..." />
            </div>
        </div>
    )
}

export default NumberInput;