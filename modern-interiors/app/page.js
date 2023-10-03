"use client";
import React, { useEffect, useRef, useState } from "react";
import EnquiryModal from "@/comonents/EnquiryModal";
import Image from "next/image";
import logo from "../Image/logo.png";
import { motion } from "framer-motion";
import AboutUs from "@/comonents/AboutUs";
import Services from "@/comonents/Services";
import MainPage from "@/comonents/MainPage";
import Contactus from "@/comonents/Contactus";
import Maps from "@/comonents/Maps";
import axios from "axios";
import Link from "next/link";

export default function Hero() {
  let a = process.env.GOOGLE_MAP_API;
  const herosection = useRef(null);
  const serviceSection = useRef(null);
  const aboutus = useRef(null);
  // const WhyusSection =useRef(null)
  const ContactusSection = useRef(null);
  const maps = useRef(null);

  const ScrolltoHero = () => {
    herosection.current?.scrollIntoView({ behavior: "smooth" });
  };
  const ScrolltoServices = () => {
    serviceSection.current?.scrollIntoView({ behavior: "smooth" });
  };
  const ScrolltoAboutUs = () => {
    aboutus.current?.scrollIntoView({ behavior: "smooth" });
  };
  // const whyusClick = () => {
  //   WhyusSection.current?.scrollIntoView({behavior: 'smooth'})
  // };
  const ContactUS = () => {
    ContactusSection.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrolltomaps = () => {
    ContactusSection.current?.scrollIntoView({ behavior: "smooth" });
  };

  const projectvideo = () => {};

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
            backgroundColor: "transparent",
            backdropFilter: " blur(6px)",
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
              className="hover"
              style={{
                cursor: "pointer",
                paddingRight: "20px",
                fontWeight: "bold",
              }}
            >
              HOME
            </div>
            <div
              className="hover"
              onClick={ScrolltoAboutUs}
              style={{
                cursor: "pointer",
                paddingRight: "20px",
                fontWeight: "bold",
              }}
            >
              ABOUT US
            </div>
            <div
              className="hover"
              onClick={ScrolltoServices}
              style={{
                cursor: "pointer",
                paddingRight: "20px",
                fontWeight: "bold",
              }}
            >
              SERVICES
            </div>
            {/* <div className="hover" onClick={whyusClick}  style={{ cursor: "pointer", paddingRight: "20px" }}>
              WHY US
            </div> */}
            <Link href="/video">
              <div
                className="hover"
                style={{ cursor: "pointer", paddingRight: "20px",fontWeight:'bold' }}
              >
                PROJECT VIDEO
              </div>
            </Link>
            <div
              onClick={ContactUS}
              className="hover"
              style={{
                cursor: "pointer",
                paddingRight: "20px",
                fontWeight: "bold",
              }}
            >
              CONTACT US
            </div>
            <div
              onClick={scrolltomaps}
              className="hover"
              style={{ cursor: "pointer", fontWeight: "bold" }}
            >
              MAP
            </div>
          </div>
        </motion.header>
      </div>
      <div ref={herosection}>
        <MainPage Openmodel={Openmodel} setOpenmodel={setOpenmodel} />
      </div>
      <div ref={aboutus} className=" mt-36">
        <AboutUs />
      </div>

      <div ref={serviceSection} style={{ marginTop: "1rem" }}>
        <Services />
      </div>

      {/* <div ref={WhyusSection} style={{marginTop:'8rem'}}>
       <Whyus/>
       </div> */}

      <div ref={ContactusSection} style={{ marginTop: "1rem" }}>
        <Contactus />
      </div>

      <div ref={maps} style={{ marginTop: "1rem" }}>
        <Maps />
      </div>

      {/* <div style={{marginTop:'1rem'}}>
       <Video/>
       </div> */}
    </div>
  );
}
