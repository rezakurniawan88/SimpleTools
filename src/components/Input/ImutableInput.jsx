import React from "react";

const ImutableInput = ({title, value}) => {
    return (
        <div className="result w-3/4 md:w-1/2">
            <h1>{title}</h1>
            <textarea type="text" name="result" id="result" placeholder="hasil..." className="w-full p-5 bg-slate-100 border border-gray-500 rounded-lg focus:outline-none" value={value} readOnly /><br />
        </div>
    )
}

export default ImutableInput;