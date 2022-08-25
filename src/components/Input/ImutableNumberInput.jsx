import React from "react";

const ImutableNumberInput = ({title, name, id, value}) => {
    return (
        <div className="w-full md:w-[48%]">
            <h2 className="font-semibold pb-3 dark:text-[#ccd6f6]">{title}</h2>
            <input type="number" name={name} id={id} className="w-full p-4 bg-slate-100 border border-gray-500 rounded-lg focus:outline-none" value={value} readOnly />
        </div>
    )
}

export default ImutableNumberInput;