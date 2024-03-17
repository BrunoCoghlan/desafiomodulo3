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
  /* declaracion de estandos para ser enviados a otro componentes */
  const [listado, setListado] = useState(BaseColaboradores)
  const [alert, setAlert] = useState('')
  const [renderLista, setRenderLista] = useState(BaseColaboradores)
  const [search, setSearch] = useState('')
  return (
    <Row className='p-5'>
      <Col xs={12} md={12}>
        <h1 className='text-center mt-5 fs-1'>Lista de Colaboradores</h1>
      </Col>
      <Buscador search={search} setSearch={setSearch} setRenderLista={setRenderLista} listado={listado} />
      <Listado renderLista={renderLista} />
      <Formulario setRenderLista={setRenderLista} setSearch={setSearch} setAlert={setAlert} setListado={setListado} listado={listado}>
        {alert === '' ? null : <Alerta alert={alert} />/* condicion para que inicialmente no se renderize */}
      </Formulario>
    </Row>
  )
}

export default App
