

const areaCalcule = ($base, $height) => {
    return ($base * $height) / 2;
}


function Example1() {
    const base = 5;
    const height = 10;
    const area = areaCalcule(base, height);
    
    return (
        <div>
            <h1>Ejemplo 1</h1>
            <p>El area de un rectángulo de base {base} y altura {height} es {area}</p>
        </div>
    )
}


export default Example1