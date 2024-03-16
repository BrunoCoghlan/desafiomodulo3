import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'
import { v4 } from 'uuid'

const Formulario = ({ setAlert, setListado, listado, children }) => {
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [edad, setEdad] = useState('')
  const [cargo, setCargo] = useState('')
  const [telefono, setTelefono] = useState('')
  /* control de submit, mensajes vacios, y actualizacion del listado */
  const handleSubmit = (e) => {
    e.preventDefault()
    if (nombre === '') return setAlert({ mensaje: 'Completa el con tu Nombre', color: 'danger' })
    if (correo === '') return setAlert({ mensaje: 'Completa el con tu Correo', color: 'danger' })
    if (edad === '') return setAlert({ mensaje: 'Completa el con tu Edad', color: 'danger' })
    if (cargo === '') return setAlert({ mensaje: 'Completa el con tu Cargo', color: 'danger' })
    if (telefono === '') return setAlert({ mensaje: 'Completa el con tu Telefono', color: 'danger' })
    setAlert({ mensaje: 'Colaboradora agregado exitosamente!', color: 'success' })
    setListado([...listado, {
      id: v4(),
      nombre,
      correo,
      edad,
      cargo,
      telefono
    }])
    setNombre('')
    setCorreo('')
    setEdad('')
    setCargo('')
    setTelefono('')
  }
  return (
    <Col xs={12} md={3}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='d-grid gap-2'>
          <Form.Control type='text' placeholder='Nombre' onChange={(e) => { setNombre(e.target.value) }} value={nombre} />
          <Form.Control type='email' placeholder='Correo' onChange={(e) => { setCorreo(e.target.value) }} value={correo} />
          <Form.Control type='number' placeholder='Edad' onChange={(e) => { setEdad(e.target.value) }} value={edad} />
          <Form.Control type='text' placeholder='Cargo' onChange={(e) => { setCargo(e.target.value) }} value={cargo} />
          <Form.Control type='number' placeholder='Telefono' onChange={(e) => { setTelefono(e.target.value) }} value={telefono} />
          <Button variant='success' type='submit'>
            Agregar
          </Button>
          {children}
        </Form.Group>
      </Form>
    </Col>
  )
}

export default Formulario
