import React from 'react'
import ProfilePicture from "../assets/profile1.jpg";
import {RiArrowRightFill} from 'react-icons/ri';
import {FcLike} from 'react-icons/fc';

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white py-4'>
                    I'm a Flutter Developer
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    <FcLike/> solving problems using code. <br />
                    Loves to build applications with Flutter, Node.js, Supabase.
                    Self-learning on technologies such as React too! 
                </p>

                <div>
                    <button>
                        Portfolio
                        <RiArrowRightFill/>
                    </button>
                </div>
            </div>

            <div>
                <img src={ProfilePicture} alt="myprofilepicture" className='rounded-2xl mx-auto w-2/3 md:w-full' />
            </div>
        </div>
    </div>
  )
}

export default Home