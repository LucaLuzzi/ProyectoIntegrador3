import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export const Navxd = () => {
 

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="container-fluid">
          <span className={`navbar-text ${isScrolled ? "navbar-text-scrolled" : ""}`}>StockMasters</span>
          <div className="botonesnav">
            <NavLink className="btn btn-success" to="/">
              Home
            </NavLink>

            <NavLink className="btn btn-primary" to="/Stock">
              Acceder
            </NavLink>

          </div>
        </div>
      </nav>
    </>
  );
};
