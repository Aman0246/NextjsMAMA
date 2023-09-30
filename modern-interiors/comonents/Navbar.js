import Image from "next/image";
import React from "react";
import logo from '../Image/logo.png'

export default function Navbar() {
  return (
    <header 
      style={{
        display: "flex",
        width: "90%",
        margin:'auto',
        justifyContent: "space-between",
        paddingTop:'1rem',
      }}
    >
      <div style={{ cursor: "pointer",width:'4rem',height:'4rem' }}><Image style={{width:'100%',borderRadius:'2rem',height:'100%'}} src={logo}></Image></div>
      <div
        style={{
          display: "flex",
          width: "60%",
          justifyContent: "space-evenly",
          paddingRight:'2rem'
        }}
      >
        <div style={{ cursor: "pointer", paddingRight:'20px' }}>HOME</div>
        <div style={{ cursor: "pointer", paddingRight:'20px' }}>SERVICES</div>
        <div style={{ cursor: "pointer", paddingRight:'20px' }}>ABOUT US</div>
        <div style={{ cursor: "pointer", paddingRight:'20px' }}>WHY US</div>
        <div style={{ cursor: "pointer", paddingRight:'20px' }}>GALLERY</div>
        <div style={{ cursor: "pointer", paddingRight:'20px' }}>CONTACT US</div>
        <div style={{ cursor: "pointer", }}>MAP</div>
      </div>
    </header>
  );
}
