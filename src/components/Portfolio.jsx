import React from 'react'
import docOCR from '../assets/portfolio/DOCOCR.png';
import eShop from '../assets/portfolio/Eshop.png';
import reactPortFolio from '../assets/portfolio/ReactPortfolio.png';
import wixPortFolio from '../assets/portfolio/WixsitePortfolio.png';
// Import pictures here



const Portfolio = () => {

  const portfolios = [{
    id: 1,
    src: docOCR,
    codelink: 'https://github.com/Hwang2212/dococr'

  },
  {
    id: 2,
    src: eShop,
    codelink: 'https://github.com/Hwang2212/E-shop-clothing-predictive-modelling'

  },
  {
    id: 3,
    src: reactPortFolio,
    viewlink: 'https://andyhwang.netlify.app/',
    codelink: 'https://github.com/Hwang2212/portfolio'

  },
  {
    id: 4,
    src: wixPortFolio,
    viewlink: 'https://andyhwangsauyee.wixsite.com/my-site'

  },]

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Browse through the work I've done!</p>
        </div>


        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {portfolios.map(({ id, src, viewlink, codelink }) => (
          <div key={id} className='shadow-md shadow-gray-500 rounded-lg'>
          <img src={src} alt="" className='rounded-md duration-200 hover:scale-110' />
          <div className='flex items-center justify-center'>
            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'> 
            <a href={viewlink} target="_blank" rel="noreferrer">View</a></button>
            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href={codelink} target="_blank" rel="noreferrer">Code</a> </button>
          </div>
        </div>
        ))}
          
        </div>

      </div>
    </div>
  )
}

export default Portfolio