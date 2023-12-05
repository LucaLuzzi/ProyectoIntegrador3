import { useState } from 'react'
import { Navxd } from '../Components/Navxd'
import '../index.css';
import svgxd from '../assets/svgxd.svg'
import lol from '../assets/lolxd.svg'
import { NavLink } from "react-router-dom";


export const Index = () => {
    const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
    <div className="landing">
    <div className='heroxdxd'>
        <Navxd/>
        <div className="hero">
            <div className="textoshero">
            <h1>StockMaster</h1>
            <hr />
            <p>Creamos soluciones para todos tus problemas de conteo de productos en tu empresa.
            </p>
            <ul>
                <li> <i className="fa-solid fa-user"></i> Usado por miles</li>
                <li> <i className="fa-solid fa-list"></i>Control de stock</li>
                <li> <i className="fa-solid fa-globe"></i>100% online</li>
            </ul>
          <NavLink to="/Stock"> <button>Adquiere StockMaster <i className="fa-solid fa-arrow-right"></i></button> </NavLink>
            <p>Garantia de 30 dias</p>
            </div>
        </div>
        </div>
        <svg className='nube' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0027a8" fillOpacity="1" d="M0,288L48,256C96,224,192,160,288,149.3C384,139,480,181,576,181.3C672,181,768,139,864,133.3C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        <div className="nosotros">
            <h2>¿Porque Nosotros?</h2>
            <div className="logocards">
                <div className="logo">
                <i className="fa-solid fa-user"></i>
                <h4>Gran base</h4>
                    <div className="textologo">
                        Contamos con una base de miles de usuarios que dia a dia confian en nosotros.
                    </div>
                </div>
                <div className="logo">
                <i className="fa-solid fa-briefcase"></i>
                <h4>Equipo 24/7</h4>
                    <div className="textologo">
                        Contamos con un equipo de trabajo extenso que brinda servicio de soporte 24/7
                    </div>
                </div>
                <div className="logo">
                <i className="fa-solid fa-pencil"></i>
                <h4>Facilidad</h4>
                    <div className="textologo">
                        Contamos con un software completamente editable y intuitivo para que tu trabajo sea facil.
                    </div>
                </div>
            </div>

        </div>
        <svg className='nube2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fdf2e2" fillOpacity="1" d="M0,96L288,128L576,64L864,256L1152,224L1440,128L1440,0L1152,0L864,0L576,0L288,0L0,0Z"></path></svg>
        <div className='beneficios'>
        <div className="textosbeneficios">
        <p>Organizate</p>
        <h2>A tu manera</h2>
        <p>Un sistema de conteo de stock que permite mejorar la movilidad de tu negocio a la hora de realziar un inventario.</p>
        <NavLink to="/Stock"> 
        <button
        className={`buttonxd ${isHovered ? "hovered" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
                                
        Descubre StockMaster{" "}
    <i className="fa-solid fa-arrow-right"></i>
</button>
        </NavLink>
        </div>
        <div className="imagenbeneficios">
            <img src={svgxd} alt="" />
        </div>

        </div>

        <div className='beneficios2'>
        <div className="textosbeneficios textos2">
        <p>Supervisa</p>
        <h2>Todas tus operaciones</h2>
        <p>Gestiona el inventario, haz un seguimiento de tu stock y obten informacion comercial util en tiempo real, todo en un solo lugar, para que puedas centrarte en hacer crecer tu negocio.</p>
        <NavLink to="/Stock"> 
        <button
        className={`buttonxd ${isHovered ? "hovered" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
                                
        Descubre StockMaster{" "}
    <i className="fa-solid fa-arrow-right"></i>
</button>
        </NavLink>
        </div>
            <div className="imagenbeneficios">
                <img src={lol} alt="" />
            </div>
        </div>
        <svg className='nube3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffe8c4" fillOpacity="1" d="M0,224L0,64L288,64L288,192L576,192L576,288L864,288L864,160L1152,160L1152,320L1440,320L1440,0L1152,0L1152,0L864,0L864,0L576,0L576,0L288,0L288,0L0,0L0,0Z"></path></svg>
        <div className="promocion">
            <p>Entonces...</p>
            <h2>¿Que esperas?</h2>
            <div className="pp1"> 
            <p>Ya sea que quieras ordenar los productos de tu negocio en tu barrio o en todo el mundo, tenemos todas las herramientas que necesitas para lograrlo.</p>
            </div>
            <NavLink to="/Stock">
            <button>Adquiere StockMaster <i className="fa-solid fa-arrow-right"></i></button>
            </NavLink>
        </div>
    </div>
    <svg className='nube4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fdd79a" fillOpacity="1" d="M0,96L34.3,96C68.6,96,137,96,206,96C274.3,96,343,96,411,85.3C480,75,549,53,617,74.7C685.7,96,754,160,823,186.7C891.4,213,960,203,1029,170.7C1097.1,139,1166,85,1234,85.3C1302.9,85,1371,139,1406,165.3L1440,192L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>
    </>
)
}
