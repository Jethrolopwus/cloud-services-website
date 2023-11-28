import React from "react";
import {
    CloudUploadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon,
} from '@heroicons/react/solid';


const Services = () =>{
    return (
        <div className='w-full flex justfy-center'>
        <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%] mx-1 transform md:translate-x-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl'>
          <p>Data Services</p>
          <div className='flex justify-between flex-wrap px-4'>
            <p className='flex py-4 px-2 text-indigo-500'><CloudUploadIcon className='h-6 text-indigo-600'/> App Services</p>
            <p className='flex py-4 px-2 text-indigo-500'><DatabaseIcon className='h-6 text-indigo-600'/> Dashboard Design</p>
            <p className='flex py-4 px-2 text-indigo-500'><PaperAirplaneIcon className='h-6 text-indigo-600'/> Cloud Data</p>
            <p className='flex py-4 px-2 text-indigo-500'><ServerIcon className='h-6 text-indigo-600'/> API</p>
          </div>  
        </div>
        </div>
       
    )
} 
export default Services;