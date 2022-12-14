import React from 'react'
import ProfilePicture from "../assets/profile1.jpg";
import {RiArrowRightFill} from 'react-icons/ri';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-yellow-300 py-4'>
                    I'm a Flutter Developer
                </h2>
                <p className='text-gray-500 max-w-md'>
                    Full-time mobile application developer cross-platforms. <br />
                    Currently building applications with Flutter, Node.js, Supabase.
                    Self-learning on technologies like React too! 
                </p>

                <div> {/*Use group to to group hover */}
                    <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-purple-500 to-pink-500 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-500'><RiArrowRightFill/></span>
                        
                    </Link>
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