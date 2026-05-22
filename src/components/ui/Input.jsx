import { useId } from "react";

function Input({type = 'text', label = '', placeholder = '', value, onChange, className = '', style = {}}) {
    const id = useId();

    return (
        <>
            <label htmlFor={id} className="block text-gray-700 my-2.5">{label}</label>
            {type === 'textarea' ? (
                <textarea 
                    id={id}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={`w-full p-2 border border-gray-300 rounded ${className}`}
                    style={style}
                />
            ) : (
                <input 
                    id={id}
                    type={type} 
                    placeholder={placeholder} 
                    value={value} 
                    onChange={onChange} 
                    className={`w-full p-2 border border-gray-300 rounded ${className}`} 
                    style={style} 
                />
            )}
        </>
    );
}

export default Input;