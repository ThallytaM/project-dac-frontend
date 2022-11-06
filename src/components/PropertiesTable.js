import React from "react";

export default props => {

    const rows = props.properties.map(property => {
        return(
            <tr key = {property.id}>
            <td>{property.id}</td>
            <td>{property.address}</td>
            <td>{property.area}</td>
            <td>{property.rentValue}</td>
            <td>
                <button type = "button" title="Editar" className="btn btn-primary"
                onClick={e => props.edit(property.id)}>
                </button>
                <button type = "button" title="Excluir" className="btn btn-primary"
                onClick={e => props.delete(property.id)}>
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
                <th scope="col">Endereço</th>
                <th scope="col">Área</th>
                <th scope="col">Aluguel</th>
                <th scope="col">Ações</th>
            </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
    </table>
    )

}