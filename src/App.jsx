import 'bootstrap/dist/css/bootstrap.min.css'
import BaseColaboradores from './js/BaseColaboradores.js'
import Listado from './components/Listado.jsx'
import Formulario from './components/Formulario.jsx'
import Alerta from './components/Alerta.jsx'
import Buscador from './components/Buscador.jsx'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState } from 'react'

const App = () => {
  const [listado, setListado] = useState(BaseColaboradores)
  const [alert, setAlert] = useState('')
  const [buscar, setBuscar] = useState([])
  return (
    <Row className='p-5'>
      <Col xs={12} md={12}>
        <h1 className='text-center mt-5 fs-1'>Lista de Colaboradores</h1>
      </Col>
      <Buscador setBuscar={setBuscar} listado={listado} />
      <Listado listado={listado} />
      <Formulario setAlert={setAlert} setListado={setListado} listado={listado}>
        {alert === '' ? null : <Alerta alert={alert} />}
      </Formulario>
    </Row>
  )
}

export default App
