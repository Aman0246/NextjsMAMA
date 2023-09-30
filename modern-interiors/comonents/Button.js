"use client"
import React from 'react'
import { motion } from 'framer-motion'
export default function Button({text}) {
  return (
    <motion.div whileTap={{scale:0.9}} style={{fontSize:'2rem',display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'orange',borderRadius:'1rem',cursor:'pointer' ,padding:'1.25rem'}} >
      {text}
    </motion.div>
  )
}
