import { useState } from 'react';
import '../index.css';

import Create from '../Pages/Create';

export const Main = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <> 
      <div className='crear'>
        <h3><i className="fa-solid fa-circle-exclamation"></i> Crear nuevo stock.</h3>
        <button onClick={handleOpenModal}><i className="fa-solid fa-circle-plus"></i>Crear</button>
      </div>
      {isModalOpen && <Create handleCloseModal={handleCloseModal} />}
    </>
  );
};