import React from "react";

export default props => {

    const rows = props.clients.map(client => {
        return(
            <tr key = {client.id}>
            <td>{client.id}</td>
            <td>{client.name}</td>
            <td>{client.cpf}</td>

            <td>
                <button type = "button" title="Editar" className="btn btn-primary"
                onClick={e => props.edit(client.id)}>
                </button>
                <button type = "button" title="Excluir" className="btn btn-primary"
                onClick={e => props.delete(client.id)}>
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
                <th scope="col">Name</th>
                <th scope="col">CPF</th>
                <th scope="col">Ações</th>
            </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
    </table>
    )

}