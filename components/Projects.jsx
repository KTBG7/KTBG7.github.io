import React from 'react'
import pure_beauty_studio from '@/public/pure-beauty-studio.png'
import leom_suppliers from '@/public/leom-suppliers.png'
import pomodoro from '@/public/pomodoro.png'
import Image from 'next/image'

const Projects = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-center items-center gap-8 py-8'>
          <div className='bg-white shadow-md flex flex-col w-80 h-[470px] rounded-md'>
            <a href='https://www.ibanezandpartners.com' target='_blank' className='hover:opacity-75 hover:pointer'>
            <Image src={pure_beauty_studio} alt="Screenshot of Pure Beauty Studio website" className="rounded-t-md"/>
            </a>
            <div className='px-4 text-center font-montserrat'>
            <h3 className='font-poppinsmedium text-2xl text-secondary'>Pure Beauty Studio</h3>
            <h4 className='font-poppinsmedium text-xl'>Technologies: </h4>
              <p>HTML5, CSS3, ReactJS, NextJS, TailwindCSS</p>
              <p>(WIP)Pure Beauty Studio is an ecommerce website being created for my ethestician business, I led the front end which was worked on by Lauren Monowar Jones and I. Backend was created by Ismael Ibanez and Ben Williams.</p>
            </div>
          </div>
            <div className='bg-white shadow-md flex flex-col w-80 h-[470px] rounded-md'>
            <a href='https://www.kevinibanez.site' target='_blank' className='hover:opacity-75 hover:pointer'>
            <Image src={leom_suppliers} alt="Screenshot of Leom Suppliers website" className="rounded-t-md" />
            </a>
            <div className='px-4 text-center font-montserrat'>
            <h3 className='font-poppinsmedium text-2xl text-secondary'>Leom Suppliers</h3>
            <h4 className='font-poppinsmedium text-xl'>Technologies: </h4>
              <p>HTML5, CSS3, ReactJS, NextJS, TailwindCSS</p>
              <p>(WIP)Leom Suppliers is a website being created for a local family business in the clothes manufacturing business, the front end was created by Lauren Monowar Jones and I.</p>
            </div>
          </div>
             <div className='bg-white shadow-md flex flex-col w-80 h-[470px] rounded-md'>
            <a href='https://www.kevinibanez.site' target='_blank' className='hover:opacity-75 hover:pointer'>
            <Image src={pomodoro} alt="Screenshot of Pomodoro App website" className="rounded-t-md"/>
            </a>
            <div className='px-4 text-center font-montserrat'>
            <h3 className='font-poppinsmedium text-2xl text-secondary'>Pomodoro App</h3>
            <h4 className='font-poppinsmedium text-xl'>Technologies: </h4>
              <p>HTML5, CSS3, ReactJS, NextJS, TailwindCSS</p>
              <p>(WIP) The Pomodoro timer has 3 modes which are all adjustible with the gear icon.
              I decided to create this app because I was recently diagnosed
              with ADHD-C and using Pomodoro timers for focusing have been essential for me to work efficiently.
              </p>
            </div>
          </div>
        </div>
  )
}

export default Projects