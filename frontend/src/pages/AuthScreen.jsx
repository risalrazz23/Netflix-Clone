import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, PlusIcon, X } from 'lucide-react'
import { Input } from "@nextui-org/input";
import { input } from '@nextui-org/react';
import { Accordion, AccordionItem } from "@nextui-org/react";
import Divider from '../components/Divider';
import logo from '../assets/images/netflix-logo.png'
import tv from '../assets/images/tv.png'
import monitor from '../assets/images/device-pile.png'
import mob from '../assets/images/stranger-things-lg.png'
import strangerThingsLogo from '../assets/images/stranger-things-sm.png'
import gif from '../assets/images/download-icon.gif'
import kidsImg from '../assets/images/kids.png'
import { data } from '../constants/AccordianContent'
const AuthScreen = () => {
  const [isOpen, setIsOpen] = useState({
    open: 0,
    id: 0
  })
  return (
    <div className='w-full h-screen bg-black'>
      <div className='bg-img h-[518px] md:h-[700px] '>

        <header className=' max-w-6xl mx-auto py-4 px-3 md:px-32 2xl:px-10 flex items-center justify-between '>
          <Link to={'/'}>
            <img src={logo} alt='logo' className='w-24 md:w-40 2xl:w-44'></img>
          </Link>
          <Link to={'/signup'} className='w-50 bg-[#E50914] my-auto py-1 px-3 rounded-sm font-semibold text-white '>Sign In</Link>
        </header>
        <div className='max-md-4xl space-y-3 py-10   md:py-40'>
          <h1 className='text-white text-center text-[32px] md:text-6xl font-bold mb-4'>Unlimited Movies,TV shows , and more</h1>

          <p className='text-center  text-white text-lg md:text-lg  font-semibold'>Watch anywhere.Cancel anytime.</p>
          <p className='text-center  text-white px-14 text-lg md:text-lg  font-semibold'>Ready to watch? Enter your email to create or resart your membership.</p>
          <div className='w-full md:h-20   block px-10  md:flex  items-center justify-center  md:mt-20 '>
            <div className="flex  flex-wrap  md:flex-nowrap gap-5 text-white">
              <div className='w-96  border border-gray-500  hover:border hover:border-white rounded-sm text-gray-100'>

                <Input type="email" label="Email address" variant='faded' classNames={{
                  label: "text-gray-100 ",
                  input: [
                    "bg-black/60",
                    "text-white text-[20px]",
                    "placeholder:text-red-100 ",


                  ],
                  innerWrapper: "text-gray-100 ",
                  inputWrapper: [
                    "text-gray-100",
                    "bg-black/60 ",
                    "rounded",
                    "border border-none",
                    "placeholder:text-red-100 ",


                  ],

                }}
                />
              </div>

            </div>
            <div className='flex items-center justify-center mt-3 md:mt-0'>

              <button className='bg-[#E50914] py-2 px-2 md:px-8 md:py-3  font-semibold text-lg md:text-[25px] flex rounded-sm border-none  mx-2 text-white'>Get Started <ChevronRight color='white' size={30} /> </button>
            </div>
          </div>
        </div>
      </div>




      <Divider />
      {/* section 1 */}
      <div className='py-10 bg-black text-white'>
        <div className='flex max-w-6xl mx-auto items-center justify-center lg:flex-row flex-col px-4 md:px-2'>

          <div className='flex-1 text-center lg:text-left'>
            <h2 className='text-4xl md:text-4xl font-extrabold md:font-extrabold lg:font-extrabold mb-4'>Enjoy on your TV</h2>
            <p className='text-lg md:text-lg lg:text-xl'>
              Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
            </p>
          </div>

          <div className='flex-1 relative'>
            <img src={tv} alt='Tv image' className='mt-4 z-20 relative' />
            <video
              className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2 z-10'
              playsInline
              autoPlay={true}
              muted
              loop
            >
              <source src='/hero-vid.m4v' type='video/mp4' />
            </video>
          </div>
        </div>
      </div>
      <Divider />

      {/* section 2 */}

      <div className='py-10 bg-black text-white'>
        <div className='flex max-w-6xl mx-auto items-center justify-center lg:flex-row  flex-col-reverse px-4 md:px-2'>

          <div className='flex-1 relative '>
            <img src={mob} className='relative ' />
            <div className='flex  absolute top-[61%] sm:top-[65%]  md:top-[70%] left-[10%] sm:left-[18%] bg-black z-10 items-center justify-between border-2  border-gray-500  rounded-xl px-2 w-[75%] sm:w-[65%]'>
              <div className=' flex items-center'>
                <img src={strangerThingsLogo} alt='logo' className='w-10 md:w-14 my-2 ' />
                <div className='ml-2 sm:ml-6'>

                  <h4 className='text-white font-bold'>Stranger Things</h4>
                  <p className='text-sm text-blue-600 font-semibold'>Downloading...</p>
                </div>
              </div>
              <div>
                <img src={gif} alt="gif" className='w-10' />
              </div>
            </div>
          </div>

          <div className='flex-1 text-center lg:text-left '>
            <h2 className='text-4xl md:text-left md:text-3xl text-balance  lg:text-5xl font-extrabold mb-4'>Download your shows to watch offline</h2>
            <p className='text-lg  lg:text-xl'>
              Save your favourites easily and always have something to watch.
            </p>
          </div>
        </div>
      </div>
      <Divider />
      {/* section 3 */}

      <div className='py-10 bg-black text-white'>
        <div className='flex max-w-6xl mx-auto items-center justify-center flex-col lg:flex-row   px-4 md:px-2'>
          <div className='flex-1 text-center lg:text-left mt-8 lg:mt-0 '>
            <h2 className='text-4xl lg:text-left md:text-3xl text-balance  lg:text-5xl font-extrabold mb-4'>Watch everywhere</h2>
            <p className='text-lg px-1 lg:text-xl'>
              Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
            </p>
          </div>
          <div className='flex-1 relative overflow-hidden '>
            <img src={monitor} className='relative z-20' />
            <video
              className='absolute top-2 left-1/2 -translate-x-1/2  h-4/6 z-10 max-w-[63%]'
              playsInline
              autoPlay={true}
              muted
              loop
            >
              <source src='/video-devices.m4v' type='video/mp4' />
            </video>
          </div>


        </div>
      </div>
      <Divider />
      {/* section 4 */}
      <div className='py-20 bg-black text-white'>
        <div className='flex max-w-6xl mx-auto items-center justify-center lg:flex-row  flex-col-reverse px-2 md:px-2'>
          <div className='flex-1 mt-5 sm:mt-0 px-4'>
            <img src={kidsImg} alt="kids" />
          </div>
          <div className='flex-1 text-center  lg:text-left '>

            <h2 className='text-[32px]  lg:text-left md:text-3xl   lg:text-5xl font-extrabold mb-4  '>Create profiles for kids</h2>
            <p className='text-lg px-1 sm:px-9 md:px-0 lg:text-xl'>
              Send children on adventures with their favourite characters in a space made just for them—free with your membership.
            </p>
          </div>
        </div>
      </div>

      <Divider />

      {/* section 5 */}
      <div className='py-20 bg-black text-white'>

        <h2 className='text-[32px] text-center sm:text-2xl  md:text-3xl   lg:text-5xl font-extrabold mb-4  '>Frequently Asked Questions</h2>
        <div className='max-w-6xl m-auto text-white pt-20 sm:pt-3 '>


          <Accordion variant="splitted" className='mt-3  px-5 sm:px-20 ' >
            {data?.map((data, i) =>
              <AccordionItem key={i + 1} className='bg-[#2C2C2D] hover:bg-[#626263] py-3 rounded-none  ' onPress={() => setIsOpen({ open: !isOpen, id: data.id })} indicator={isOpen.open && isOpen.id == data.id ? <X color='white' size={30} className='mr-5 ' /> : <PlusIcon color='white' size={30} className='mr-5 ' />} startContent={<h1 className='text-lg sm:text-xl lg:text-2xl text-white'>{data.title}</h1>} >
                <p className='text-lg sm:text-xl lg:text-2xl text-white'>{data.paragraph1}</p>
                {data.paragraph2 ? <p className='mt-5 text-lg sm:text-xl lg:text-2xl text-white'>{data.paragraph2}</p> : null}

              </AccordionItem>
            )}
          </Accordion>
        </div>
        <h2 className='text-center mt-5 text-xl md:text-[22px] px-10 sm:px-0'>Ready to watch? Enter your email to create or restart your membership.</h2>
        <div className=' md:flex items-center justify-center gap-x-0 mt-4 px-10  '>
          <div className='flex md:w-96  border border-gray-500  hover:border hover:border-white rounded-sm text-gray-100'>

            <Input type="email" label="Email address" variant='faded' classNames={{
              label: "text-gray-100 ",
              input: [
                "bg-black/60",
                "text-white text-[20px]",
                "placeholder:text-red-100 ",


              ],
              innerWrapper: "text-gray-100 ",
              inputWrapper: [
                "text-gray-100",
                "bg-[#0E0F0E] ",
                "rounded",
                "border border-none",
                "placeholder:text-red-100 ",


              ],

            }}
            />
          </div>

          <div className='flex items-center justify-center mt-3 md:mt-0'>

              <button className='bg-[#E50914] py-2 px-2 md:px-8 md:py-3  font-semibold text-lg md:text-[25px] flex rounded-sm border-none  mx-2 text-white'>Get Started <ChevronRight color='white' size={30} /> </button>
            </div>
        </div>
      </div>
      <Divider/>
    </div>
  )
}

export default AuthScreen