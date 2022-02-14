import React from 'react'

export const ContactMe = () => {
  return (
    <div className="ContactMe__container">
      <div className="ContactMe__div">
        <h1>Contactame</h1>
        <div className="ContactMe_preform">
          <form className="ContactMe__form">
            <h3>Formulario</h3>
            <span>
              <i className="fas fa-address-book"></i>
              <input type="text" />
            </span>
            <span>
              <i className="fas fa-mail-bulk"></i>
              <input type="text" />
            </span>

            <span>
              <textarea />
            </span>

            <span className="ContactMe__button_send">
              <button>
                Enviar
              </button>
            </span>
          </form>
          <div className="ContactMe__datos">
            <div className="ContactMe__item">
              <h3>
                Celular:
              </h3>
              REMOVED
            </div>
            <div className="ContactMe__item">
              <h3>
                Correo:
              </h3> 
              chris.sys3@gmail.com
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
