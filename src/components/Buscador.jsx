import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import { useState } from 'react'

const Buscador = ({ setBuscar, listado }) => {
  const [search, setSearch] = useState('')
  const handleSearch = (e) => {
    setSearch(e.target.value)
    handlebuscador(search)
  }
  const handlebuscador = (value) => {
    const buscador = listado.filter((item) => {
      return (
        item.nombre.toLowerCase().includes(value.toLowerCase()) ||
        item.correo.toLowerCase().includes(value.toLowerCase()) ||
        item.edad.toLowerCase().includes(value.toLowerCase()) ||
        item.cargo.toLowerCase().includes(value.toLowerCase()) ||
        item.telefono.toLowerCase().includes(value.toLowerCase())
      )
    }
    )
    setBuscar(buscador)
  }
  return (
    <Col xs={12} md={6} className='py-3'>
      <Form.Control placeholder='Busca a un colaborador' onChange={handleSearch} value={search} />
    </Col>
  )
}

export default Buscador
