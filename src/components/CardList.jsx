import Card from '@/components/Card.jsx'

function CardList({ list }) {
    return (
        <div>
            {list.map((item, index) => (
                <Card key={index} primaryParamValue={item.nombre} secondaryParamValue={item.edad} />
            ))}
        </div>
    )
}

export default CardList