import React from 'react'

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-400'>About</p>
                </div>

                <p className='text-xl mt-20 '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et est voluptas deserunt debitis. Optio commodi praesentium consequatur, sit explicabo quasi.
                </p>
                <br />
                <p className='text-xl'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati itaque aperiam aliquam assumenda, veritatis reprehenderit, ipsum nam harum dicta maxime amet ut voluptatum distinctio minus est delectus exercitationem vel reiciendis ab sequi deserunt? Vitae facere rem ipsa ducimus cupiditate eligendi quas, officia dignissimos tempora, sed ipsam neque inventore obcaecati adipisci.</p>

            </div>

        </div>
    )
}

export default About