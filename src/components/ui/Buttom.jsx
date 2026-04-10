function Button({type = 'button', label = 'Click me', onClick, className = '', style = {}}) {
    return (
        <button type={type} onClick={onClick} className={className} style={style}>
            {label}
        </button>
    );
}

export default Button;