/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Button, Modal, ModalBody, ModalFooter } from "react-bootstrap";

const Vista = ({ product }) => {
  const [showModal, setShowModal] = useState(false);
  const [productDetails, setProductDetails] = useState({});

  const handleClose = () => {
    setShowModal(false);
  };

  const handleShow = () => {
    setShowModal(true);
  };

  useEffect(() => {
    // Get product details
    const fetchProduct = async () => {
      const response = await fetch(`http://localhost:3000/productos/${product.id}`);
      const data = await response.json();
      return data;
    };

    const getProductDetails = async () => {
      const details = await fetchProduct();
      setProductDetails(details);
    };

    getProductDetails();
  }, [product.id]);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Ver <i className="fa-solid fa-eye"></i>
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <ModalBody>
          <h3>Detalles del producto</h3>
          <p>Nombre: {product.nombre}</p>
          <p>Precio: {product.precio}</p>
          <p>Descripción: {product.descripcion}</p>
          <p>Stock: {product.stock}</p>
          <p>Valor total del stock: {product.precio * product.stock}</p>
        </ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Vista;