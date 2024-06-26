interface ITech {
    tech: string;
    tipo: string;
}

interface ITable {
    data?: ITech[]
}

const Table = ({ data }: ITable) => {
    return (
        <table className="table table-striped">
        <thead className="text-center">
          <tr>
            <th scope="col">Tech</th>
            <th scope="col">Tipo</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {
            data !== undefined && data.map((input, index) => {
                return(
                    <tr key={index}>
                        <td>{input.tech}</td>
                        <td>{input.tipo}</td>
                    </tr>
                )
            })
          }          
        </tbody>
      </table>
    )
}

export default Table;