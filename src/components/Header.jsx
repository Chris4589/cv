import React from 'react'
import foto from '../assets/53900756_416141062469704_9051668693288747008_n.jpg';
import video from '../assets/pexels-cottonbro-5473796.mp4';

export const Header = () => {
  return (
    <div className="Header">
      <video autoPlay controls muted loop id="myVideo">
        <source src={video} type="video/mp4"/>
      </video>
      <div className="Header__profile">
        <img className="Header__profile_photo" srcSet={foto} alt="we" />
        <div className="Header__profile_text">
          <h1>Christopher Herrera</h1>
          <h3>Desarrollador Backend</h3>
        </div>
        <div className="Header__socials">
          <ul>
            <li><a href="https://www.linkedin.com/in/christopher-herrera-370a96198/"><i className="fa fa-linkedin"></i></a></li>
            <li><a href="https://github.com/Chris4589"><i className="fa fa-github"></i></a></li>
            <li><a href="https://www.facebook.com/chrshy13/"><i className="fa fa-facebook-f"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
