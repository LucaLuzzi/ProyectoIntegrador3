import '../index.css';

export const Footer = () => {

return (
    <footer id="footerlol" className="footer-distributed ">

    <div className="footer-left">
        <h3>Stock<span>Master</span></h3>

        
        <p className="footer-company-name">Copyright © 2023 Equipo n1 Empujar </p>
    </div>

    
    <div className="footer-right">
        
        <p className="footer-company-about">
        Pagina presentada como proyecto final de cursada de UTN.
        </p>
        <p className="footer-company-about text-center">
        Integrantes
        </p>
        <hr />
        <div className="container-footer-icons d-flex justify-content-around">
        <div className="footer-icons">
            <p className='textito'>Ignacio Ravettini <br />Encargado de Frontend</p>
            <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/ignacio-ravettini-novellino/"><i className="fa fa-linkedin"></i></a>
            <a target="_blank" rel='noreferrer' href="https://github.com/Ravettini"><i className=" fa-brands fa-github"> </i></a>
            
        </div>
        <div className="footer-icons">
        <p className='textito'>Luca Luzzi <br />Encargado de Backend</p>
        <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/luca-luzzi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className="fa fa-linkedin"></i></a>
            <a target="_blank" rel='noreferrer' href="https://github.com/LucaLuzzi-03"><i className=" fa-brands fa-github"> </i></a>
            
        </div>
        
        </div>
        <div className="footer-icons">
            <p className='textito'>Joaquin Schvindt <br />Encargado de Readme</p>
            <a target="_blank" rel='noreferrer' href="mailto:ignaciorave21@gmail.com"><i className="fa fa-linkedin"></i></a>
            <a target="_blank" href="#"><i className=" fa-brands fa-github"> </i></a>
        </div>
        
    </div>
</footer>
)
}

export default Footer;