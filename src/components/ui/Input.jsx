function Input({type = 'text', label = '', placeholder = '', value, onChange, className = 'w-full p-2 border border-gray-300 rounded', style = {}}) {
    return (
        <>
            <label className="block text-gray-700 mb-2">{label}</label>
            <input 
                type={type} 
                placeholder={placeholder} 
                value={value} 
                onChange={onChange} 
                className={className} 
                style={style} 
                />
        </>
    );
}

export default Input;