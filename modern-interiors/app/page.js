"use client"
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import CountUp from 'react-countup';
import Button from '@/comonents/Button'
import { Banner } from '../comonents/Crousels';
import EnquiryModal from '@/comonents/EnquiryModal';
import Navbar from '@/comonents/Navbar';

export default function Hero() {
    const[Openmodel,setOpenmodel] = useState(false)
    useEffect(() => {
        document.title = "Modern Interiors";
      }, []);
    const [mousePosition, setmousePosition] = useState({ x: 0, y: 0 })
    useEffect(() => {
        window.addEventListener('mousemove', function (e) {
            setmousePosition({
                x: e.clientX,
                y: e.clientY
            })
        })
    }, [])
    const varients = {
        default: {
            x: mousePosition.x - 20,
            y: mousePosition.y - 20,
            scale: 0,

        },
        mouseEnter: {
            x: mousePosition.x - 20,
            y: mousePosition.y - 20,
            scale: 1
        },

    }
    const [cursoreVarient, setcursoreVarient] = useState('default')
    const mouseEnter = () => {
        setcursoreVarient('mouseEnter')
    }
    const mouseLeave = () => {
        setcursoreVarient('default')

    }
    return (
        <div>
             {Openmodel &&<div className='absolute w-[100vw] h-[100vh] z-[9000] backdrop-blur-sm bg-transparent flex justify-center items-center'> <EnquiryModal Openmodel={Openmodel} setOpenmodel={setOpenmodel}/></div> } 
            <Navbar/>
            <div className='flex'>
                <div className='flex-1 h-[90vh] relative'>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2.4 }} className='bg-white w-[20%] h-[50%] blur-[100px]  justify-center items-center absolute rounded-[50%] top-0 left-[10%] '>
                    </motion.div>
                    <motion.div variants={varients} animate={cursoreVarient} className='bg-orange-300 z-10 scale-0 pointer-events-none   w-[10%] h-[10%]   justify-center items-center absolute rounded-[50%]'>
                    </motion.div>
                    <div className='text-6xl   px-10 py-10 font-bold flex flex-col justify-center items-center h-[100%] uppercase tracking-tight '>
                       <div className='flex justify-center items-center flex-col h-[70%]'>

                       
                        <motion.div className='z-20 w-[100%] bg-transparent flex flex-col justify-center items-center' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} >
                            <motion.h1 className='bg-transparent' initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.95, delay: 0.5 }}>
                                Modern Interiors
                            </motion.h1>
                            <motion.h1 className='bg-transparent' initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.95, delay: 0.5 }}>
                                Timeless Style
                            </motion.h1>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.95, delay: 0.5 }} className='text-sm pb-[50px] text-gray-500 capitalize tracking-normal pt-6'>Find a way to Upgrade your Living with  Modern interiors</motion.div>
                        </div>
                        <div  className=' flex flex-col justify-end items-center gap-20 h-[30%] '>
                            <motion.div onClick={()=> setOpenmodel(true)} initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2, delay: 0.5 }}>
                            <Button text={'Enquire Now'} />
                          
                            </motion.div>
                            <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2, delay: 0.5 }} className='w-[100%] bg-transparent flex justify-center items-center gap-10'>
                                <div className='flex flex-col justify-center items-center'>
                                    <div className='flex text-3xl'>

                                        <CountUp start={0} end={1225} duration={5}></CountUp>
                                        <div className='flex text-3xl text-orange-400'>+</div>
                                    </div>
                                    <div className='flex text-xl'>Project Completed</div>
                                </div>
                                <div className='flex flex-col justify-center items-center'>
                                    <div className='flex text-3xl'>

                                        <CountUp start={0} end={1200} duration={5}></CountUp>
                                        <div className='flex text-3xl text-orange-400'>+</div>
                                    </div>
                                    <div className='flex text-xl'>Happy Customer</div>
                                </div>
                                <div className='flex flex-col justify-center items-center'>
                                    <div className='flex text-3xl'>
                                        <CountUp start={0} end={20} duration={10}></CountUp>

                                        <div className='flex text-3xl text-orange-400'>+</div>
                                    </div>
                                    <div className='flex text-xl'>Working on</div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                </div>
                <div className='flex-1 w-[50%] px-[5rem] h-[90vh] py-[3rem] flex justify-center items-center'>
                    <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 3, delay: 0.9 }} className=' rounded-t-[50%] w-[90%]   overflow-hidden'>
                        <Banner/>
                    </motion.div>
                </div>
                <div></div>
            </div>
        </div>
    )
}
