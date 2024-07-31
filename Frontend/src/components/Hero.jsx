import React from 'react'
import hero from '../assets/puneetup.png'

const Hero = () => {

  const social_media = [
    {logo: 'logo-instagram', link:'https://www.instagram.com/realpuneet'},
    {logo: 'logo-facebook', link:'https://www.facebook.com/realpuneet'},
    {logo: 'logo-linkedin', link:'https://www.linkedin.com/in/realpuneet'},
    {logo: 'logo-twitter', link:'https://x.com/realpuneet22'},
    {logo: 'logo-github', link:'https://github.com/realpuneet'}, // Added GitHub link
  ]

  return (
    <section id='home' className='min-h-screen flex py-10 md:flex-row flex-col items-center'>
      <div className='flex-1 items-center justify-center h-full'> 
        <img src={hero} alt="" className='md:w-11/12 h-full object-fit'/>
      </div>

      <div className="flex-1">
        <div className="md:text-left text-center">
            <h1 className='md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold'>
              <span className='text-orange-600 md:text-6xl text-5xl'>
                Hello<span role="img" aria-label="waving hand" className='animate-pulse'>&#x1F44B;</span>! 
                <br />
              </span>
              My Name is <span>Puneet Yadav</span>
            </h1>
            <h4 className='md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600'>
              Fullstack Developer</h4>
              <a href="https://wa.me/+919399336702" target="_blank" rel="noopener noreferrer">
                  <button className='btn-primary mt-8'>Contact Me</button>
              </a>

              <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-4">
                {
                  social_media?.map((icon) => (
                    <div  className="text-gray-700 hover:text-white cursor-pointer hover:animate-ping">
                      <a href={icon.link} target="_blank" rel="noopener noreferrer">
                        <ion-icon name={icon.logo}></ion-icon>
                      </a>
                    </div>
                  ))
                }
              </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
