import React from "react";

const InputComponent = ({name, id, value, content, onClick, onChange}) => {
    return (
        <div className="w-3/4 md:w-1/2">
            <textarea type="text" name={name} id={id} placeholder="paste disini" className="w-full p-5 border border-blue-300 rounded-lg" value={value} onChange={onChange} /><br />
            <button onClick={onClick} className="w-full bg-transparent bg-blue-500  p-3 text-white text-sm my-3 rounded-lg">{content}</button>
        </div>
    )
}


export default InputComponent;