/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const Create = ({ handleCloseModal }) => {
  const [productData, setProductData] = useState({
    nombre: "",
    precio: 0,
    descripcion: "",
    stock: 0,
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (productData.nombre === "") {
      setError("Por favor, ingrese los datos");
      return;
    }
    if (productData.descripcion === "") {
      setError("Por favor, ingrese la descripción");
      return;
    }

    fetch(`http://localhost:7777/productos/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Nuevo producto creado con ID:", data);
        // Realizar alguna acción adicional después de crear el producto
        handleCloseModal(); // Cerrar el modal
        window.location.reload(); // Recargar la página
      })
      .catch((error) =>
        console.error("Error al crear un nuevo producto:", error)
      );
  };

  return (
    <div>
      <Modal show={true} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Crear nuevo producto</Modal.Title>
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
              {error && <p style={{ color: "red", fontSize: "10px" }}>{error}</p>}
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
              {error && <p style={{ color: "red", fontSize: "10px" }}>{error}</p>}
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

export default Create;