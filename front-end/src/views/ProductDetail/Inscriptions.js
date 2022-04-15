import { Alert, Table } from "react-bootstrap";

export function Inscriptions ({ inscriptions }) {
  return (
    <>
      <h2>Clientes Cadastrados</h2>
      {inscriptions.length > 0 ? (
        <Table striped responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Celular</th>
              <th>Endereço</th>
            </tr>
          </thead>
          <tbody>
            {inscriptions.map(inscription => (
              <tr key={inscription.id}>
                <td>{inscription.id}</td>
                <td>{inscription.name}</td>
                <td>{inscription.email}</td>
                <td>{inscription.celular}</td>
                <td>{inscription.endereço}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <Alert variant="info">Este catalogo ainda não possui clientes cadastrados.</Alert>
      )}
    </>
  )
} 