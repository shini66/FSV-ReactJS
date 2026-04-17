
function UserList() {
    const users = [
        {name: 'Juan', active: true, salary: 50000},
        {name: 'María', active: false, salary: 60000},
        {name: 'Pedro', active: true, salary: 55000},
    ];

    const activeUsers = users.filter(user => user.active);
    const totalActiveSalary = activeUsers.reduce((total, user) => total + user.salary, 0);
    const allUsersSalary = users.reduce((total, user) => total + user.salary, 0);

    return (
        <div>
            <h2>Usuarios Activos</h2>
            <ul>
                {activeUsers.map((user, index) => (
                    <li key={index}>{user.name} - ${user.salary}</li>
                ))}
            </ul>
            <p>Total salario de usuarios activos: ${totalActiveSalary}</p>
            <p>Total salario de todos los usuarios: ${allUsersSalary}</p>
        </div>
    );
}

export default UserList;