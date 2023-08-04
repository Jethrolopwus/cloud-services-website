import { CheckIcon } from '@heroicons/react/solid';
import React from 'react';

const Princing = () => {
  return (
    <div className='w-full text-white my-24'>
      <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'></div>
      <div  className='max-w-[1240px] mx-auto py-12'>
            <div className='text-center py-8 text-slate-300'>
                <h2 className='text-3xl uppercase'>Princing</h2>
                <h3 className='text-5xl font-bold text-white py-8'>The Right Princing For Your Research</h3>
                <p className='text-3xl'>Our Princing and subsciption varies according to the various trajectory and services we offer </p>
            </div>


            <div className='grid md:grid-cols-2'>
                <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                    <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-950 rounded-2xl text-sm'>Standard</span>
                    <div>
                        <p className='text-6xl font-bold py-4 flex'>$49<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
                    </div>
                    <p className='text-2xl py-8 text-slate-500'>These prices are so flexible for each of our services</p>
                    <div className='text-2xl relative'>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />Software Engineering</p>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />Data Science</p>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />Product Design</p>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />Embeded Systems Engineering</p>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />Digital Marketing</p>
                        <button className='w-full py-4 my-4'>Get Started</button>
                    </div>
                </div>
                <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                    <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-950 rounded-2xl text-sm'>Premium</span>
                    <div>
                        <p className='text-6xl font-bold py-4 flex'>$99<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
                    </div>
                    <p className='text-2xl py-8 text-slate-500'>These prices are so flexible for each of our services</p>
                    <div className='text-2xl relative'>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />Software Engineering</p>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />Data Science</p>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />Product Design</p>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />Embeded Systems Engineering</p>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />Digital Marketing</p>
                        <button className='w-full py-4 my-4'>Get Started</button>
                    </div>
                </div>
            </div>
      </div>

    </div>
  );
}

export default Princing;
