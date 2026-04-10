

function Card({primaryParamName = 'Nombre', primaryParamValue, secondaryParamName = 'Edad', secondaryParamValue}) {
    return (
        <div style={{border: "1px solid black", padding: "10px", margin: "10px"}}>
            <h2>{primaryParamName}: {primaryParamValue}</h2>
            <p>{secondaryParamName}: {secondaryParamValue}</p>
        </div>
    )
}

export default Card