import React from 'react';
import './About.css';
import Side from '../../images/side.jpg';

function About() {
  return (
    <div className='about-main'>
        <div className="left-side">
        <img src={Side} alt="About"/>
        </div>
        <div className="right-side">
        <h2 className="about-title">About</h2>
        <div className="lineP"></div>

        <p className="para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore dignissimos deleniti ipsam totam voluptatum beatae accusantium, vitae est cupiditate incidunt libero saepe quas vero, id hic illum? Illum fugit quod aperiam alias ex, repudiandae nisi recusandae impedit deserunt. Perferendis rerum ad voluptatibus minus veniam? Quidem tempore deserunt illum id.</p>
        </div>
    </div>
  )
}

export default About