/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const Update = ({ productId,nombre,descripcion,precio,stock }) => {
  const [productData, setProductData] = useState({
    id: productId,
    nombre: nombre,
    descripcion: descripcion,
    precio: precio,
    stock: stock,
  
  });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:7777/productos/update/${productId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((response) => response.json())
      .then((success) => {
        if (success) {
          console.log("Producto actualizado correctamente.");
        } else {
          console.log(
            "No se pudo actualizar el producto. El ID del producto podría no existir."
          );
        }
      })
      .catch((error) =>
        console.error("Error al actualizar el producto:", error)
      );
    setShowModal(false); // Cerrar el modal después de enviar la solicitud
    window.location.reload(); // Recargar la página
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    window.location.reload(); // Recargar la página
  };

  return (
    <div>
      <Button variant="warning" onClick={handleOpenModal}>
      Editar <i className="fa-solid fa-pencil"></i>
      </Button>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Actualizar producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formNombre">
              <Form.Label>Nombre:</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                value={productData.nombre}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formPrecio">
              <Form.Label>Precio:</Form.Label>
              <Form.Control
                type="number"
                name="precio"
                value={productData.precio}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formDescripcion">
              <Form.Label>Descripción:</Form.Label>
              <Form.Control
                type="text"
                name="descripcion"
                value={productData.descripcion}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formStock">
              <Form.Label>Stock:</Form.Label>
              <Form.Control
                type="number"
                name="stock"
                value={productData.stock}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Guardar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Update;