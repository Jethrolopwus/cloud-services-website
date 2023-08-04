import React from 'react';
import {
    CloudUploadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon,
} from '@heroicons/react/solid';

import data from '../Assets/front.jpg'

const Hero = () => {
  return (
    <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-col-2 max-w-[1240px] m-auto '>
            <div className='flex flex-col justify-center w-full md:items-start px-2 py-20'>
                <p className='text-2xl'>Unique Sequencing and Data Production</p>
                <h1 className='py-2 text-5xl md:text-7xl font-bold'>Cloud Management</h1>
                <p className='text-2xl'>This is Our Tech Brand</p>
                <button className='py-3 px-4 sm:w-[60%] my-4'>Get Started</button>
            </div>
            <div>
              <img className='w-full h-[80%]' src={data} alt="/" />
            </div>
            <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%] mx-1 md:left-1/2 transform md:translate-x-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl'>
              <p>Data Services</p>
              <div className='flex justify-between flex-wrap px-4'>
                <p className='flex py-4 px-2 text-indigo-500'><CloudUploadIcon className='h-6 text-indigo-600'/> App Services</p>
                <p className='flex py-4 px-2 text-indigo-500'><DatabaseIcon className='h-6 text-indigo-600'/> Dashboard Design</p>
                <p className='flex py-4 px-2 text-indigo-500'><PaperAirplaneIcon className='h-6 text-indigo-600'/> Cloud Data</p>
                <p className='flex py-4 px-2 text-indigo-500'><ServerIcon className='h-6 text-indigo-600'/> API</p>
              </div>
              
            </div>
        </div>
      
    </div>
  );
}

export default Hero;
