import { useState } from "react";
import Card from './Card.jsx'
import CardForm from './CardFrom'

const userList = [
    {name: 'Juan', age: 30},
    {name: 'María', age: 25},
    {name: 'Pedro', age: 35},
]

function CardList({ list = userList }) {

    const [users, setUsers] = useState(list)

    const handleSaveUserData = (newUser) => {
        setUsers((prevUsers) => [...prevUsers, newUser]);
    };

    return (
        <div>
            <CardForm onSaveUserData={handleSaveUserData} />
            {users.map((item, index) => (
                <Card key={index} primaryParamValue={item.name} secondaryParamValue={item.age} />
            ))}
        </div>
    )
}

export default CardList