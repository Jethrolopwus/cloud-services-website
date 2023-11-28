import React from 'react';
// import Logo from "../Assets/cyber.jpg"
import data from '../Assets/front.jpg'
// import {Carousel} from "react-responsive-carousel";

const Hero = () => {
  return (
    <div name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='flex m-auto'>
            <div className='flex flex-col justify-center w-full md:items-start px-2 py-20'>
                <p className='text-2xl'>Unique Sequencing and Data Production</p>
                <h1 className='py-2 text-5xl md:text-7xl font-bold'>Cloud Management</h1>
                <p className='text-2xl'>This is Our Tech Brand</p>
                <button className='py-3 px-4 sm:w-[60%] my-4'>Get Started</button>
            </div>
            <div>
              <img className='' src={data} alt="/" />
              {/* <img className='' src={Logo} alt='' /> */}
              </div>
            <div className="">
              {/* <Carousel showThumbs = {false} showStatus={false} infiniteLoop={true} autoPlay={true} interval={3000}> */}
              
              <div>
              {/* <img className='' src={data} alt="/" /> */}
              {/* <img className='' src={Logo} alt='' /> */}
              </div>
              {/* </Carousel> */}
            </div>
           
        </div>
      
    </div>
  );
}

export default Hero;
