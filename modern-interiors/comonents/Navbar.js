// import Image from "next/image";
// import React from "react";
// import logo from "../Image/logo.png";
// import { motion } from "framer-motion";
// export default function Navbar() {

//   return (
//     <motion.header
//       initial={{ opacity: 0, y: -100 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1, delay: 1 }}
//       style={{
//         backgroundColor: "#242931",
//         display: "flex",
//         width: "100vw",
//         paddingLeft: "5rem",
//         justifyContent: "space-between",
//         alignItems: "center",
//         height: "5rem",
//       }}
//     >
//       <div style={{ cursor: "pointer", width: "4rem", height: "4rem" }}>
//         <Image
//           style={{
//             width: "5rem",
//             borderRadius: "2rem",
//             height: "4.5rem",
//             paddingBottom: "10px",
//           }}
//           src={logo}
//         ></Image>
//       </div>
//       <div
//         style={{
//           display: "flex",
//           width: "60%",
//           justifyContent: "space-evenly",
//           paddingRight: "2rem",
//         }}
//       >
//         <div
//           onClick={ScrolltoHero}
//           style={{ cursor: "pointer", paddingRight: "20px" }}
//         >
//           HOME
//         </div>
//         <div style={{ cursor: "pointer", paddingRight: "20px" }}>SERVICES</div>
//         <div style={{ cursor: "pointer", paddingRight: "20px" }}>ABOUT US</div>
//         <div style={{ cursor: "pointer", paddingRight: "20px" }}>WHY US</div>
//         <div style={{ cursor: "pointer", paddingRight: "20px" }}>GALLERY</div>
//         <div style={{ cursor: "pointer", paddingRight: "20px" }}>
//           CONTACT US
//         </div>
//         <div style={{ cursor: "pointer" }}>MAP</div>
//       </div>
//     </motion.header>
//   );
// }
