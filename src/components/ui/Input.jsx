function Input({type = 'text', label = '', placeholder = '', value, onChange, className = '', style = {}}) {
    return (
        <>
            <label className="block text-gray-700 my-2.5">{label}</label>
            {type === 'textarea' ? (
                <textarea 
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={`w-full p-2 border border-gray-300 rounded ${className}`}
                    style={style}
                />
            ) : (
                <input 
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