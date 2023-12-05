import { NavLink } from "react-router-dom";

export const Nav2 = () => {
 




  return (
    <>
      <nav className= "navbar navbar2" style={{color : "black" }} >
        <div className="container-fluid">
          <span className= "navbar-text2">StockMasters</span>
          <div className="botonesnav">

            <NavLink className="btn btn-primary" to="/">
              Cerrar Sesion
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};
