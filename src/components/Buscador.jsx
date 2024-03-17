import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

const Buscador = ({ setRenderLista, listado, setSearch, search }) => {
  const handleSearch = (e) => {
    const searchText = e.target.value.toLowerCase()
    setSearch(e.target.value)
    setRenderLista(listado.filter((item) => {
      return (
        item.nombre.toLowerCase().includes(searchText) ||
        item.correo.toLowerCase().includes(searchText) ||
        item.edad.toLowerCase().includes(searchText) ||
        item.cargo.toLowerCase().includes(searchText) ||
        item.telefono.toLowerCase().includes(searchText)
      )
    }
    )
    )
  }
  return (
    <Col xs={12} md={6} className='py-3'>
      <Form.Control placeholder='Busca a un colaborador' onChange={handleSearch} value={search} />
    </Col>
  )
}

export default Buscador
