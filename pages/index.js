import { useState } from 'react'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3, DiReact, DiJava} from 'react-icons/di'
import {SiJavascript, SiTailwindcss} from 'react-icons/si'
import {TbBrandNextjs} from 'react-icons/tb'
import Banner from '@/components/Banner'
import Projects from '@/components/Projects'
import Welcome from '@/components/Welcome'


export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <Head>
        <title>Kevin Ibanez</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div>
        <Navbar />
        <main className='min-h-screen'>
        <div className='flex justify-center bg-primary items-center'>
        <div id="welcome">
          <Welcome />
        </div>
        </div>
        <div id="About" className='flex flex-col lg:flex-row max-sm:px-6 justify-center lg:justify-around shadow-lg py-8 px-6'>
          <div className='flex flex-col text-center gap-16 w-full max-sm:pb-6 lg:w-1/2'>
            <h2 className='text-6xl text-secondary font-poppinsmedium'>About Me</h2>
            <p className='text-2xl font-montserrat'>Hello, I'm Kevin. I have 1.5~ years of experience as a Software engineer.
             I have worked at Bank of America, JP Morgan Chase & Co and Upstart!
             Most of my work has been in the front end side of things using languages and frameworks like
             React, Angular and NextJS, however at all these companies I have also done any work
             necessary for the teams performance so I have created features in Springboot for the back end.
            </p>
          </div>
          <div className='text-center'>
            <h1 className='text-4xl md:text-6xl text-secondary font-poppinsmedium'>Technologies</h1>
            <div className='flex justify-around'>
              <div className='flex flex-row items-center text-3xl'>
                <ul className='text-5xl'>
                  <li><AiFillHtml5 /></li>
                  <li><DiCss3 /></li>
                  <li><SiJavascript /></li>
                  <li><DiReact /></li>
                  <li><TbBrandNextjs /></li>
                  <li><SiTailwindcss /> </li>
                  <li><DiJava /></li>
                </ul>
                <ul className='flex flex-col gap-3'>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>Javascript</li>
                  <li>ReactJS</li>
                  <li>NextJS</li>
                  <li>TailwindCSS</li>
                  <li>Java</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="Projects" className='py-10'>
          <h2 className='text-center text-4xl font-montserratextra'>My Projects</h2>
          <Projects />
        </div>
        <div id="Contact">
        <Contact setSubmitted={setSubmitted} />
        </div>
        { submitted ? <Banner setSubmitted={setSubmitted} /> : null}
        </main>  
        
        <footer className='bg-white text-black font-montserratsemi border-t-2 py-4 text-center'>
          <p>© 2023. All rights reserved by Kevin Ibanez</p>
        </footer>
        </div>
    </>
  )
}