import React from "react";

export default props => {

    const rows = props.users.map(user => {
        return(
            <tr key = {user.id}>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>

            <td>
                <button type = "button" title="Editar" className="btn btn-primary"
                onClick={e => props.edit(user.id)}>
                </button>
                <button type = "button" title="Excluir" className="btn btn-secondary"
                onClick={e => props.delete(user.id)}>
                </button>
            </td>
        </tr>
 )
})


    return(
    
    <table className="table table-hover">
        <thead>
            <tr className="table-primary">
                <th scope="col">ID</th>
                <th scope="col">Usuário</th>
                <th scope="col">Email</th>
                <th scope="col">Ações</th>
            </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
    </table>
    )

}