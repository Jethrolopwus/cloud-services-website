import React from 'react';

const About = () => {
  return (
    <div className='w-full py-32'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='text-center'>
            <h2 className='text-5xl font-bold'>Trusted by Developers across the World</h2>
            <p className='text-3xl py-6 text-gray-600'>We are Commited to get our clients across the world to enjoy our services and proucts which is cut across Data science, Amazon Web Services, and other tech services and consultations services and trainings as well.</p>
        </div>
        <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
            <div className='border py-8 rounded-xl shadow-xl'>
                <p className='text-6xl  font-bold text-indigo-600'>100%</p>
                <p className='text-gray-400 mt-2'>Completion</p>
            </div>
            <div className='border py-8 rounded-xl shadow-xl'>
                <p className='text-6xl  font-bold text-indigo-600'>24/7</p>
                <p className='text-gray-400 mt-2'>Delivery</p>
            </div>
            <div className='border py-8 rounded-xl shadow-xl'>
                <p className='text-6xl  font-bold text-indigo-600'>100K</p>
                <p className='text-gray-400 mt-2'>cosultations</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default About;
