import React, {useRef} from 'react';
import './contact.css';
import GithubIcon from '../../assets/github.png.png';
import LinkedinIcon from '../../assets/linkedin.png.png';
import TwitterIcon from '../../assets/twitter.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_on5ameg', 'template_d28uqu3', form.current, 'IARJtn4V0LxwEP4SM')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Sent !');
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
   <section className="contactPage">
    <div id='contact'>
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDesc'>Please fill out the from below to discuss any work opportunities.</span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <input type='text' className='name' placeholder='Your Name' name='your_name'/>
            <input type='email' className='email' placeholder='Your email' name='your_email'/>
            <textarea className="msg" name='message' rows='5' placeholder='Your message'></textarea>
            <input type='submit' value='Submit'className='submitBtn'/>
            <div className='links'>
                <img src={GithubIcon} alt="Github" className='link'/>
                <img src={LinkedinIcon} alt="Linkedin" className='link'/>
                <img src={TwitterIcon} alt="Twitter" className='link'/>
                <img src={InstagramIcon} alt="Instagram" className='link'/>
            </div>

        </form>
    </div>
   </section>
  )
}

export default Contact;
