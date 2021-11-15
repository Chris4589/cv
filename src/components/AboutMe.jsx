import React from 'react';
import aboutme from '../assets/aboutme/aboutme.svg';

export const AboutMe = () => {
  const fecha = new Date();
  const yearsOld = fecha.getFullYear() - 1998;

  return (
    <div className="AboutMe__container">
      {/* <h1 className="AboutMe__title">Sobre Mi</h1> */}
      <div className="AboutMe_Description">
        <div className="AboutMe_Img">
          <img srcSet={aboutme} alt="me" />
        </div>
        <div className="AboutMe_text">
          <div>
            <h2>Sobre mi</h2>
            <p>
              Me llamo Christopher Herrera tengo {yearsOld} años de edad, me gusta el <b>Desarrollo Web</b> y <b>DevOps</b>,
              llevo un año estudiando tecnologias como JavaScript, Docker, Kubernetes, etc. Me encanta el siempre aprender e 
              ir evolucionando junto con las tecnologias!, mi sueño es poder desarrollarme como un excelente profesional y 
              ser de utilidad a la empresa a la que pertenezca.

              <br /> <br />
              Frase: <b>Tu propia inspiración puede inspirar e instruir a otros...</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
