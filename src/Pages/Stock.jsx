/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { Productcard } from '../Components/ProductCard';
import { Main } from '../Components/Main';
import '../index.css';
import { Nav2 } from '../Components/nav2';

const Stock = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState({
    price: 'none',
    stock: 'none',
    id: 'none',
  });
  const [currency, setCurrency] = useState('USD'); // Moneda por defecto es dólar

  const fetchProductsByName = async () => {
    try {
      const response = await fetch(`http://localhost:7777/productos/search?name=${searchTerm}`);
      if (response.ok) {
        const data = await response.json();
        setProducts(data.products);
      } else {
        setProducts([]);
      }
    } catch (error) {
      console.error('Error al obtener los productos:', error);
      setProducts([]);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch(`http://localhost:7777/productos`);
      if (response.ok) {
        const data = await response.json();
        setProducts(data.productos);
      } else {
        setProducts([]);
      }
    } catch (error) {
      console.error('Error al obtener los productos:', error);
      setProducts([]);
    }
  };

  useEffect(() => {
    if (searchTerm !== '') {
      if (!isNaN(searchTerm)) {
        // Realizar búsqueda por ID
      } else {
        fetchProductsByName();
      }
    } else {
      fetchProducts();
    }
  }, [searchTerm]);

  const handleSortOrder = (field) => {
    setSortOrder((prevSortOrder) => {
      let newSortOrder = {
        price: 'none',
        stock: 'none',
        id: 'none',
      };
      if (field === 'price') {
        newSortOrder.price = prevSortOrder.price === 'asc' ? 'desc' : 'asc';
      } else if (field === 'stock') {
        newSortOrder.stock = prevSortOrder.stock === 'asc' ? 'desc' : 'asc';
      } else if (field === 'id') {
        newSortOrder.id = prevSortOrder.id === 'asc' ? 'desc' : 'asc';
      }
      return newSortOrder;
    });
  };

  const handleCurrencyChange = () => {
    setCurrency(currency === 'USD' ? 'ARS' : 'USD');
  };

  const convertCurrency = (price) => {
    if (currency === 'USD') {
      return price; // Si la moneda es dólar, se muestra el precio sin cambios
    } else {
      return price * 900; // Si la moneda es pesos, se convierte el precio a pesos
    }
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOrder.price !== 'none') {
      if (sortOrder.price === 'asc') {
        return a.precio - b.precio;
      } else {
        return b.precio - a.precio;
      }
    } else if (sortOrder.stock !== 'none') {
      if (sortOrder.stock === 'asc') {
        return a.stock - b.stock;
      } else {
        return b.stock - a.stock;
      }
    } else if (sortOrder.id !== 'none') {
      if (sortOrder.id === 'asc') {
        return a.id - b.id;
      } else {
        return b.id - a.id;
      }
    } else {
      return 0;
    }
  });

  return (
    <>
      <Nav2/>
      <div className='MainBorder'>
        <Main />
        <div className='d-flex pb-3 busqueda justify-content-center'>
          <label><i className="fa-solid fa-magnifying-glass"></i></label>
          <input
            type="text"
            placeholder='Busqueda por nombre'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className='btn btn-dark pesos' onClick={handleCurrencyChange}>
            Cambiar Moneda a {currency === 'USD' ? 'Pesos' : 'Dólares'}
          </button>
        </div>
        
        <div className="containertable">
          <table>
            <thead>
              <tr>
                <th>ID <button className={`btn  ${sortOrder.id !== 'none' ? 'active' : ''}`} onClick={() => handleSortOrder('id')}>
            <i className={`fa-solid fa-sort-numeric-${sortOrder.id === 'asc' ? 'up' : 'down'}`}></i>
          </button></th>
                <th>Nombre</th>
                <th>Descripcion</th>
                <th>Precio <button className={`btn  ${sortOrder.price !== 'none' ? 'active' : ''}`} onClick={() => handleSortOrder('price')}>
            <i className={`fa-solid fa-sort-amount-${sortOrder.price === 'asc' ? 'up' : 'down'}`}></i> 
          </button></th>
                <th>Stock <button className={`btn  ${sortOrder.stock !== 'none' ? 'active' : ''}`} onClick={() => handleSortOrder('stock')}>
            <i className={`fa-solid fa-sort-amount-${sortOrder.stock === 'asc' ? 'up' : 'down'}`}></i>
          </button></th>
                <th>Acciones</th>
              </tr>
            </thead>
            {sortedProducts.length > 0 ? (
              sortedProducts.map((product) => (
                <Productcard
                  key={product.id}
                  id={product.id}
                  nombre={product.nombre}
                  descripcion={product.descripcion}
                  precio={convertCurrency(product.precio)} // Se convierte el precio según la moneda seleccionada
                  stock={product.stock}
                />
              ))
            ) : (
              <tr>
                <td colSpan="6">No se encontró ningún producto con ese nombre.</td>
              </tr>
            )}
          </table>
        </div>
      </div>
    </>
  );
};

export default Stock;