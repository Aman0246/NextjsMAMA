"use client";
import React, { useEffect, useRef, useState } from "react";
import EnquiryModal from "@/comonents/EnquiryModal";
import Image from "next/image";
import logo from "../Image/logo.png";
import { motion } from "framer-motion";
import AboutUs from "@/comonents/AboutUs";
import Services from "@/comonents/Services";
import MainPage from "@/comonents/MainPage";

export default function Hero() {
  const herosection =useRef(null)
  const serviceSection =useRef(null)
  const aboutus =useRef(null)
  const ScrolltoHero = () => {
    herosection.current?.scrollIntoView({behavior: 'smooth'})
  };
  const ScrolltoServices = () => {
    serviceSection.current?.scrollIntoView({behavior: 'smooth'})
  };
  const ScrolltoAboutUs = () => {
    aboutus.current?.scrollIntoView({behavior: 'smooth'})
  };

  const [Openmodel, setOpenmodel] = useState(false);
  useEffect(() => {
    document.title = "Modern Interiors";
  }, []);

  return (
    <div className=" relative w-[100vw]">
      {Openmodel && (
        <div className="absolute flex z-[9000] backdrop-blur-sm bg-transparent justify-center items-center">
          <EnquiryModal Openmodel={Openmodel} setOpenmodel={setOpenmodel} />
        </div>
      )}
      <div title="Modern Interiors" className="fixed top-0 z-[1050] ">
        <motion.header
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          style={{
            // backgroundColor: "#242931",
            backgroundColor:'transparent',
            backdropFilter:" blur(6px)",
            display: "flex",
            width: "100vw",
            paddingLeft: "5rem",
            justifyContent: "space-between",
            alignItems: "center",
            height: "5rem",
          }}
        >
          <div style={{ cursor: "pointer", width: "4rem", height: "4rem" }}>
            <Image
              style={{
                width: "5rem",
                borderRadius: "2rem",
                height: "4.5rem",
                paddingBottom: "10px",
              }}
              src={logo}
            ></Image>
          </div>
          <div
            style={{
              display: "flex",
              width: "60%",
              justifyContent: "space-evenly",
              paddingRight: "2rem",
            }}
          >
            <div
              onClick={ScrolltoHero}
              style={{ cursor: "pointer", paddingRight: "20px" }}
            >
              HOME
            </div>
            <div onClick={ScrolltoAboutUs} style={{ cursor: "pointer", paddingRight: "20px" }}>
              ABOUT US
            </div>
            <div onClick={ScrolltoServices} style={{ cursor: "pointer", paddingRight: "20px" }}>
              SERVICES
            </div>
            <div style={{ cursor: "pointer", paddingRight: "20px" }}>
              WHY US
            </div>
            <div style={{ cursor: "pointer", paddingRight: "20px" }}>
              GALLERY
            </div>
            <div style={{ cursor: "pointer", paddingRight: "20px" }}>
              CONTACT US
            </div>
            <div style={{ cursor: "pointer" }}>MAP</div>
          </div>
        </motion.header>
      </div>
      <div ref={herosection}>
        <MainPage
          Openmodel={Openmodel}
          setOpenmodel={setOpenmodel}
        />
      </div>
      <div ref={aboutus} className="mt-20">
        <AboutUs />
      </div>

      <div ref={serviceSection} className=" mt-32"  >
        <Services />
      </div>
    </div>
  );
}
