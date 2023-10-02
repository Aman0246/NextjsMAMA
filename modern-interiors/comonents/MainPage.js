"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import Button from "@/comonents/Button";
import { Banner } from "../comonents/Crousels";
export default function MainPage({ Openmodel, setOpenmodel }) {
  const [mousePosition, setmousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener("mousemove", function (e) {
      setmousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    });
  }, []);
  const varients = {
    default: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 100,
      scale: 0,
    },
    mouseEnter: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 100,
      scale: 1,
    },
  };
  const [cursoreVarient, setcursoreVarient] = useState("default");
  const mouseEnter = () => {
    setcursoreVarient("mouseEnter");
  };
  const mouseLeave = () => {
    setcursoreVarient("default");
  };
  const containerStyle = {
    display: "flex",
    paddingTop: "4.5rem",
  };
  const leftColumnStyle = {
    flex: 1,
    height: "90vh",
    position: "relative",
  };
  const rightColumnStyle = {
    flex: 1,
    width: "50%",
    paddingRight: "3rem 5rem",
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const grayCircleStyle = {
    backgroundColor: "#a0aec0",
    width: "20%",
    height: "50%",
    filter: "blur(100px)",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    borderRadius: "50%",
    top: 0,
    left: "10%",
  };
  const orangeCircleStyle = {
    backgroundColor: "#FFA500",
    zIndex: 10,
    transform: "scale(0)",
    pointerEvents: "none",
    width: "10%",
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    borderRadius: "50%",
    // left: `${mousePosition.x - 500}px`,
    // top: `${mousePosition.y - 300}px`,
  };
  const headingContainerStyle = {
    fontSize: "3.75rem",
    padding: "10px",
    fontWeight: "bold",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    textTransform: "uppercase",
    letterSpacing: "tight",
  };
  const findAWayStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "70%",
  };
  const findAWayTextStyle = {
    fontSize: "0.875rem",
    paddingBottom: "50px",
    color: "gray",
    textTransform: "capitalize",
    letterSpacing: "normal",
    paddingTop: "6px",
  };
  const bannerContainerStyle = {
    opacity: "0",
    transform: "translateX(100px)",
    borderTopLeftRadius: "50%",
    width: "90%",
    overflow: "hidden",
  };
  const buttonContainerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: "20px",
    height: "30%",
  };
  const projectContainer = {
    width: "100%",
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  };
  const projectCompleted = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  const projectCompletedOne={
    display: "flex",
    fontSize: "1.875rem", // 30px
    lineHeight: "2.25rem", // 36px
  }
  const projectCompletedOneOne={
    display: "flex",
    fontSize: "1.875rem", // 30px
    lineHeight: "2.25rem", // 36px
    color:'#FFA500'
  }
  const findAWayStyleOne={
    zIndex: 20,
    width: "100%",
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  const elementStyle = {
    fontSize: "1.25rem",    // 20px
    lineHeight: "1.75rem",  // Adjust as needed
    display: "flex",
  };
  
  return (
    <div style={containerStyle}>
      <div style={leftColumnStyle}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.4 }}
          style={grayCircleStyle}
        ></motion.div>
        <motion.div
          style={orangeCircleStyle}
          variants={varients}
          animate={cursoreVarient}
        ></motion.div>
        <div style={headingContainerStyle}>
          <div style={findAWayStyle}>
            <motion.div
              style={findAWayStyleOne}
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
            >
              <motion.h1
                style={{ background: "transparent" }}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.95, delay: 0.5 }}
              >
                Modern Interiors
              </motion.h1>
              <motion.h1
                style={{ background: "transparent" }}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.95, delay: 0.5 }}
              >
                Timeless Style
              </motion.h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.95, delay: 0.5 }}
              style={findAWayTextStyle}
            >
              Find a way to Upgrade your Living with Modern interiors
            </motion.div>
          </div>
          <div style={buttonContainerStyle}>
            <motion.div
              onClick={() => setOpenmodel(true)}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 0.5 }}
            >
              <Button text={"Enquire Now"} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 0.5 }}
              style={projectContainer}
            >
              <div style={projectCompleted}>
                <div style={projectCompletedOne}>
                  <CountUp start={0} end={1225} duration={5}></CountUp>
                  <div style={projectCompletedOneOne}>+</div>
                </div>
                <div style={elementStyle}>Project Completed</div>
              </div>
              <div style={projectCompleted}>
                <div style={projectCompletedOne}>
                  <CountUp start={0} end={1200} duration={5}></CountUp>
                  <div style={projectCompletedOneOne}>+</div>
                </div>
                <div style={elementStyle}>Happy Customer</div>
              </div>
              <div style={projectCompleted}>
                <div style={projectCompletedOne}>
                  <CountUp start={0} end={20} duration={10}></CountUp>

                  <div style={projectCompletedOneOne}>+</div>
                </div>
                <div style={elementStyle}>Working on</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div style={rightColumnStyle}>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 3, delay: 0.9 }}
          style={bannerContainerStyle}
        >
          <Banner />
        </motion.div>
      </div>
    </div>
  );
}
