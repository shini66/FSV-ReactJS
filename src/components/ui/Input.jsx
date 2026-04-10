function Input({type = 'text', label = '', placeholder = '', value, onChange, className = '', style = {}}) {
    return (
        <>
            <label>{label}</label>
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