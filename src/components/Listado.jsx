import Table from 'react-bootstrap/Table'
import Col from 'react-bootstrap/Col'

const Listado = ({ listado }) => {
  return (
    <Col xs={12} md={9}>
      <div className='table-responsive'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Edad</th>
              <th>Cargo</th>
              <th>Telefono</th>
            </tr>
          </thead>
          <tbody>
            {listado.map(({ cargo, correo, edad, nombre, telefono, id }) => {
              return (
                <tr key={id}>
                  <td>{nombre}</td>
                  <td>{correo}</td>
                  <td>{edad}</td>
                  <td>{cargo}</td>
                  <td>{telefono}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </div>
    </Col>
  )
}

export default Listado
