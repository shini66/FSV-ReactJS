function Button({type = 'button', label = 'Click me', onClick, buttonType = 'primary', className = ''}) {
    const baseClass = 'py-2 px-4 rounded';
    let typeClass = '';
    switch (buttonType) {
        case 'primary':
            typeClass = 'bg-blue-500 text-white hover:bg-blue-600';
            break;
        case 'secondary':
            typeClass = 'bg-gray-500 text-white hover:bg-gray-600';
            break;
        case 'danger':
            typeClass = 'bg-red-500 text-white hover:bg-red-600';
            break;
        default:
            typeClass = 'bg-blue-500 text-white hover:bg-blue-600';
    }
    const combinedClass = `${baseClass} ${typeClass} ${className}`;

    return (
        <button type={type} onClick={onClick} className={combinedClass}>
            {label}
        </button>
    );
}

export default Button;