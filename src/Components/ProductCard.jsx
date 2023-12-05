/* eslint-disable react/prop-types */
import { useState } from 'react';
import DeleteButton from '../Pages/Delete';
import Update from '../Pages/Update';
import Vista from './Vista';
import '../index.css';

export const Productcard = ({ id, nombre, descripcion, precio, stock }) => {
  const productIdToDelete = id;
  const [deletedItems, setDeletedItems] = useState([]);
  const handleDelete = (productId) => {
    setDeletedItems((prevItems) => [...prevItems, productId]);
  };
  return (
    <>
      <tbody>
        <tr className="hover-row">
          <td> {id} </td>
          <td>{nombre}</td>
          <td>{descripcion} </td>
          <td>${precio}</td>
          <td>{stock}</td>
          <td className="tbutton">
            <div>
              <Update
                productId={id}
                nombre={nombre}
                descripcion={descripcion}
                precio={precio}
                stock={stock}
              />
            </div>
            <div>
              <DeleteButton
                productId={productIdToDelete}
                handleDelete={handleDelete}
              />
            </div>
            <div> 
              <Vista
                product={{
                  id,
                  nombre,
                  descripcion,
                  precio,
                  stock
                }}
              />
            </div>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default Productcard;