import React from "react";
import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
export default function Contactus() {
  const handleHover = (e) => {
    e.target.style.color = "orange";
  };
  const handleHovers = (e) => {
    e.target.style.color = "white";
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -500, scale: .5 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <div style={{ fontSize: "3rem" }}>Contact Us</div>
      <div
        style={{
          width: "80%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 30,
          padding: "20px 0px",
        }}
      >
        <div
          style={{ flex: 1, display: "flex", flexDirection: "column", gap: 30 }}
        >
          <div>
            <div style={{ display: "flex", gap: 10 }}>
              <LocationOnIcon sx={{ fontSize: "3rem" }} />

              <div>
                <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  Our Office Address
                </div>
                <div style={{ color: "gray" }}>
                  Shop No. 3, Sai chambers, Nr. Railway Station, Santacruz
                  (East), Mumbai 400055.
                </div>
              </div>
            </div>
          </div>
          <div>
            <div style={{ display: "flex", gap: 10 }}>
              <EmailIcon sx={{ fontSize: "3rem" }} />

              <div>
                <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  General Enquiries
                </div>
                <div style={{ color: "gray" }}>
                  Shailesh@moderninteriors.info
                </div>
              </div>
            </div>
          </div>
          <div>
            <div style={{ display: "flex", gap: 10 }}>
              <CallIcon sx={{ fontSize: "3rem" }} />

              <div>
                <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  Call Us
                </div>
                <div style={{ color: "gray" }}>+91-9820883513</div>
              </div>
            </div>
          </div>
          <div>
            <div style={{ display: "flex", gap: 10 }}>
              <AccessTimeIcon sx={{ fontSize: "3rem" }} />

              <div>
                <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  Mon to Sat 8 AM to 9 PM
                </div>
                <div style={{ color: "gray" }}>
                  Mon - Sun : Open 8 AM to 9 PM
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ flex: 1, display: "flex" }}>
          <div style={{ width: "100%" }}>
            <form
              style={{ display: "flex", flexDirection: "column", gap: 30 }}
              action=""
            >
              <input
   
                style={{
                  backgroundColor: "#383636",
                  padding: ".7rem",
                  borderRadius: "1rem",
                  outline: "none",
                }}
                type="text"
                placeholder="YOUR NAME"
              />

              <input
        
                style={{
                  backgroundColor: "#383636",
                  padding: ".7rem",
                  borderRadius: "1rem",
                  outline: "none",
                }}
                type="email"
                placeholder="YOUR EMAIL"
              />
              <input

                style={{
                  backgroundColor: "#383636",
                  padding: ".7rem",
                  outline: "none",
                  borderRadius: "1rem",
                }}
                type="number"
                className="quantity"
                placeholder="YOUR CONTACT NO."
              />
              <textarea
                
                style={{
                  backgroundColor: "#383636",
                  borderRadius: "1rem",
                  padding: ".7rem",
                  outline: "none",
                }}
                type="text"
                placeholder="YOUR MESSAGE"
              />
              <div
                style={{
                  display: "flex",
                  borderRadius: "1rem",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <button
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHovers}
                  type="submit"
                  className="buttonHover"
                  style={{
                    backgroundColor: "gray",
                    padding: ".9rem 2rem",
                    borderRadius: "2rem",
                    // color: "black",
                    fontWeight: "bold",
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
