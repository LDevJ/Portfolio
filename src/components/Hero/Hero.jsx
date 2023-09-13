import React, { useEffect, useState } from 'react';
import './hero.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Hero = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='hero'>
      {windowWidth > 767 && (
        <div className='hero-content'>
          <div className='hero-text'>
            <p className='Iam'>Hi, I am</p>
            <h1>Luis Pejerrey</h1>
            <p className='hero_text-work'>Front-end Developer</p>
          </div>

          <div className='hero-btns'>
            <a className='hero-btn hero_btns-X' href=''>
              <TwitterIcon />
            </a>
            <a className='hero-btn hero_btns-GitHub' href=''>
              <GitHubIcon />
            </a>
            <a className='hero-btn hero_btns-Linkedin' href=''>
              <LinkedInIcon />
            </a>
          </div>
        </div>
      )}
      <div className='hero-image'>
        <img src='src\assets\developer.png' alt='imagen-developer' />
      </div>

      {windowWidth < 767 && 
            <div div className='hero-content'>
                <p>my name is Thomas</p>
                <h1>I'M A DEVELOPER</h1>
                <img src="src\assets\separador.png" alt="separador" />
                    <div className='hero-btns'>
                        <a className='hero-btn hero_btns-X' href=''>
                        <TwitterIcon />
                        </a>
                        <a className='hero-btn hero_btns-GitHub' href=''>
                        <GitHubIcon />
                        </a>
                        <a className='hero-btn hero_btns-Linkedin' href=''>
                        <LinkedInIcon />
                        </a>
                    </div>
            </div>}
    </div>
  );
};
