import Button from "./ui/Buttom"

function Card({primaryParamName = 'Nombre', primaryParamValue, secondaryParamName = 'Edad', secondaryParamValue}) {
    return (
        <div style={{border: "1px solid black", padding: "10px", margin: "10px"}}>
            <h2>{primaryParamName}: {primaryParamValue}</h2>
            <p>{secondaryParamName}: {secondaryParamValue}</p>
            <Button label="Click me" onClick={() => alert(`El ${primaryParamName} es ${primaryParamValue} y la ${secondaryParamName} es ${secondaryParamValue}`)} buttonType='secondary' />
        </div>
    )
}

export default Card