import Table from 'react-bootstrap/Table'
import Col from 'react-bootstrap/Col'
/* se dedica a renderizar el estado renderlista cada vez que sea modificado con el .map */
const Listado = ({ renderLista }) => {
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
            {renderLista.map(({ cargo, correo, edad, nombre, telefono, id }) => {
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
