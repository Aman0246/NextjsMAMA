import React from "react";
import Aboutus from "../Image/aboutus.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
export default function AboutUs() {
  return (
    <div>
      <div
        style={{ paddingLeft: "5rem", display: "flex", paddingRight: "5rem" }}
      >
        {/* viewport={{once}} apply for once animation */}
        <motion.div initial={{opacity:0 ,scale:0}} whileInView={{opacity:1,scale:1}} transition={{duration:0.6}} style={{ flex: 1 }}>
          <Image
            src={Aboutus}
            style={{ width: "80%", height: "25rem", borderRadius: "30px" }}
          ></Image>
        </motion.div>
        <motion.div initial={{opacity:0,scale:0,x:100}} whileInView={{opacity:1,scale:1,x:0}} transition={{duration:0.6}}
          style={{
            flex: 1,
            height: "25rem",
            borderRadius: "30px",
            alignItems: "center",
            flexDirection: "column",
            display:'flex',
            gap:5
          }}
        >
          <div initial={{opacity:0,scale:0,x:-5000}} whileInView={{opacity:1,scale:1,x:0}} transition={{duration:0.6}} style={{fontSize:'3rem',marginBottom:'1rem'}} className="text-9xl">ABOUT US</div>
          <div style={{padding:'0px 10px',lineHeight:'1.5rem',fontSize:'20px'}} >
            We, Modern Interiors are renowned for providing excellent services
            that surpass our client’s expectations. To accomplish this our
            responsible site managers hire and retain, first class experienced
            workforce by approaching the building process with dedication. Our
            esteemed corporation operates primarily in the fields of civil
            contracting, architecture, interior design and building and
            developing with a talented team with civil engineers. We have
            successfully conceptualized and completed various projects while
            holding a strong base in Santacruz East, Mumbai, Maharashtra. Using
            the finest of materials, the latest innovations and the most precise
            craftsmanship we deliver projects and products designed to exceed
            your expectations. Contact us for best deals!
          </div>
        </motion.div>
      </div>
    </div>
  );
}
