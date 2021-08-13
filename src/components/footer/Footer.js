import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import Img from '../../images/excavatrice-1.png'
import ImgLogo from '../../images/logo-iac.jpeg'

function Footer(props) {
  const {menuItems} = props
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
       {/* <p className='footer-subscription-heading'>
           Materialisez vos idées dès maintenant
        </p>
        <p className='footer-subscription-text'>
          Abonnez-vous à notre newsletter.
       </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input' 
              name='email'
              type='email'
              placeholder='Votre Email'
            />
            <Button buttonStyle='btn--outline'>S'incrire</Button>
          </form>
      </div> */}
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <img src={Img} alt="excavatrice" style={{maxWidth:"170px", height:'200px'}} />
          </div>
          <div class='footer-link-items'>
            <h2>À propos</h2>
            <Link to='/apropos'>Qui sommes-nous ?</Link>
            <Link to='/equipe'>Notre équipe</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Services</h2>
            {
              menuItems.map((item,index) => (
                <Link key={index}  to={'/service-details/'+`${item._id}`} >{item.titre} </Link>
              ))
            }
          
          </div>
          <div class='footer-link-items'>
            <h2>Contactez-nous</h2>
            <Link to='/'>Tel.: (241) 065.540.168</Link>
            <Link to='/'>Fax: (241) 70 46 60 / 61</Link>
            <Link to='/'>contact@iac-ga.com</Link>
            <Link to='/'>B.P. 5398 – OWENDO (Rue : CITE SNI)</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
                  <img src={ImgLogo} alt="logo iac" style={{width:"70%"}} />
             
            </Link>
          </div>
          <small class='website-rights'>Ingénierie Access Consulting © 2020  by HRP</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;