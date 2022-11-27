import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const ModalForm = ({stock, name, props}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [nombre, setNombre] = useState(props?.value ?? '');
  const [pago, setPago] = useState(props?.value ?? '');
  const [cuotas, setCuotas] = useState(props?.value ?? '');
  


  return (
    <>
    <Button
          className='btn-block my-3 btn-primary '
          type='button'
          disabled={stock === 0}
          onClick={handleShow}
      >
          Consultar Producto
      </Button>
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Consultar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="name"
                placeholder="Tu nombre"
                autoFocus
                value={nombre} 
                onInput={e => setNombre(e.target.value)}
              />
              
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlSelect1"
            >
              <Form.Label>Metodo de pago</Form.Label>
              <Form.Control as='select' aria-label="Default select example" value={pago} 
                onInput={e => setPago(e.target.value)}>
                <option value="" selected disabled hidden>--Metodo de pago--</option>
                <option selected="selected" value="Efectivo">Efectivo</option>
                <option value="Mercado Pago">Mercado Pago</option>
              </Form.Control>
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlSelect2"
            >
              <Form.Label>Financiación</Form.Label>
              <Form.Control as='select' aria-label="Default select example" value={cuotas} 
                onInput={e => setCuotas(e.target.value)}>
                <option value="" selected disabled hidden>--Financiación--</option>
                <option selected="selected" value="Al Contado">Al Contado</option>
                <option value="Cuotas Semanales">Cuotas Semanales</option>
                <option value="Cuotas Quinsenales">Cuotas Quinsenales</option>
                <option value="Cuotas Mensuales">Cuotas Mensuales</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button 
            type='submit'
            variant="primary" 
            href={`https://api.whatsapp.com/send?phone=5491134620057&text=Hola, me llamo ${nombre}.%0A*Quiero más información del producto: ${name}%0A*Metodo de pago: ${pago}%0A*Financiación: ${cuotas}`} 
            target='_blank' 
            onClick={handleClose}>
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalForm

