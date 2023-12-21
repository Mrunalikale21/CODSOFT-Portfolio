import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';


const Skills = () => {
  return (
    <section id='skills'>
      <span className='skillTitle'>What I do</span>
      <span className='skillDesc'>I am skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye detail. I am proficient in HTML, CSS and Javascript, as well as in React Js.</span>
      <div className='skillBars'>
        <div className='skillBar'>
          <img src={UIDesign} alt="UIDesign" className='skillBarImg'/>
          <div className='skillBarText'>
            <h2>Programming</h2>
            <p>Having intermediate graps of Java programming and basic understanding of databases like MySQL and MongoDB. </p>
          </div>
        </div>
        <div className='skillBar'>
          <img src={WebDesign} alt="WebDesign" className='skillBarImg'/>
          <div className='skillBarText'>
            <h2>Web Designing</h2>
            <p>Keen knowledge of web development</p>
          </div>
        </div>
        <div className='skillBar'>
          <img src={AppDesign} alt="AppDesign" className='skillBarImg'/>
          <div className='skillBarText'>
            <h2>Differnet frameworks</h2>
            <p>Currently exploring Differnet frameworks like ReactJs , NodeJs ,etc.</p>
          </div>
        </div>
        
      </div>

    </section>
  )
}

export default Skills
