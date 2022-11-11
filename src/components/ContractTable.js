import React from "react";

export default props => {

    const rows = props.contracts.map(contract => {
        return(
            <tr key = {contract.id}>
            <td>{contract.id}</td>
            <td>{contract.clientId}</td>
            <td>{contract.propertyId}</td>
            <td>{contract.contractDate}</td>
            <td>
                <button type = "button" title="Editar" className="btn btn-primary"
                onClick={e => props.edit(contract.id)}>
                </button>
                <button type = "button" title="Excluir" className="btn btn-secondary"
                onClick={e => props.delete(contract.id)}>
                </button>
            </td>
        </tr>
    )
    })

    return(
    
    <table className="table table-hover">
        <thead>
            <tr className="table-primary">
                <th scope="col">ID Contrato</th>
                <th scope="col">ID Cliente</th>
                <th scope="col">ID Propriedade</th>
                <th scope="col">Data do Contrato</th>
                <th scope="col">Ações</th>
            </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
    </table>
    )

}