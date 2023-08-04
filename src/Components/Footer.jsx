import React from 'react';
import {FaFacebook,FaTwitter, FaGithub, FaInstagram} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full mt-24 bg-slate-900 text-gray-300 py-8 px-2'>
      <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 '>
            <div>
                <h6 className='uppercase font-bold PT-2'>Solutions</h6>
                <ul>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Analytics</li>
                    <li className='py-1'>Engineering</li>
                    <li className='py-1'>Data</li>
                    <li className='py-1'>Cloud</li>
                </ul>
            </div>
            <div>
                <h6 className='uppercase font-bold PT-2'>Solutions</h6>
                <ul>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Analytics</li>
                    <li className='py-1'>Engineering</li>
                    <li className='py-1'>Data</li>
                    <li className='py-1'>Cloud</li>
                </ul>
            </div>
            <div>
                <h6 className='uppercase font-bold PT-2'>Support</h6>
                <ul>
                    <li className='py-1'>Princing</li>
                    <li className='py-1'>Documentation</li>
                    <li className='py-1'>Guides</li>
                    <li className='py-1'>API Status</li>
                    
                </ul>
            </div>
            <div>
                <h6 className='uppercase font-bold PT-2'>Company</h6>
                <ul>
                    <li className='py-1'>About</li>
                    <li className='py-1'>Blog</li>
                    <li className='py-1'>Jobs</li>
                    <li className='py-1'>Press</li>
                    <li className='py-1'>Partners</li>
                </ul>
            </div>
            <div>
                <h6 className='uppercase font-bold PT-2'>Legals</h6>
                <ul>
                    <li className='py-1'>Claims</li>
                    <li className='py-1'>Privacy</li>
                    <li className='py-1'>Terms</li>
                    <li className='py-1'>Policies</li>
                    <li className='py-1'>Conditions</li>
                </ul>
            </div>
            <div>
                <p className='font-bold uppercase'>Subscribe to our newsletters</p>
                <p className='py-4'>The latest news, artiles,  and resources, sent to your inbox.</p>
                <form className='flex flex-col sm:flex-row'>
                    <input className='w-full py-2 mr-4 mb-4 rounded-md' placeholder='Enter Email' type='email' />
                    <button className='p-2 mb-4'>Subscribe</button>
                </form>
            </div>
        </div>

            <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
                <p className='py-4'>2023 Jos, Nigeria. All rights reserved</p>
                <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
                    <FaFacebook />
                    <FaGithub />
                    <FaInstagram />
                    <FaTwitter />
                    

                </div>
            </div>
    </div>
  );
}

export default Footer;
