import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import me from '../public/me.png'

const Welcome = () => {
  return (
    <section id="welcome" className='flex flex-col-reverse px-4 gap-8 lg:flex-row items-center py-16 justify-around'>
          <div className='pb-12 text-center'>
            <p className='font-montserratsemi text-2xl'>HELLO WORLD!</p>
            <p className='font-montserratextra text-6xl'>I'm <span className='text-secondary'>Kevin</span><br />a Front-End Developer</p>
            <p className='pb-8'>I leverage up to date technologies such as ReactJS, TailwindCSS and NextJS
            to create visually apealing websites.
            </p>
            <Link href="/#Contact" className="font-poppinsmedium text-white bg-secondary px-4 py-2 rounded-md">Get in Touch</Link>
          </div>
          <div className='bg-white rounded-2xl'>
          <Image src={me} alt="Photo of Kevin" className='rounded-2xl' />
          </div>
        </section>
  )
}

export default Welcome