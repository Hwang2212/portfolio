import React from 'react'

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-400'>About</p>
                </div>

                <p className='text-xl mt-20 '>
                    As an Actuarial Science graduate, I've found a passion in programming during my studies, especially during my Internship. Henceforth, I've self-learned technologies and also participated in AirAsia Academy's Software Engineering Bootcamp.
                </p>
                <br />
                <p className='text-xl mb-20'>
                    I have a good understanding of REST API's, Database Management, Data Analytics and Predictive Modelling. I'm also equipped with some basic frontend knowledge on Flutter, Javascript, HTML, CSS and React. Scroll down to see what I've done!</p>

            </div>

        </div>
    )
}

export default About