"use client";
import Dialog from "@mui/material/Dialog";
import "./A.css";
import React from "react";
import { motion } from "framer-motion";
import CancelIcon from "@mui/icons-material/Cancel";
export default function EnquiryModal({ Openmodel, setOpenmodel }) {
  return (
    <Dialog
      open={Openmodel}
      PaperProps={{ sx: { backgroundColor: "#383636", borderRadius: "30px" } }}
    >
      <div
        style={{
          display: "flex",
          // alignItems:,
          // padding:'0 2rem',
          color: "red",
          background: "#383636",
          padding: "0.5rem",
          color: "white",
          minWidth: "25rem",
          //   minHeight: "85%",
          gap: 50,
          flexDirection: "column",
        }}
      >
        <div
          onClick={() => setOpenmodel(false)}
          style={{
            borderRadius: "100%",
            right: 10,
            cursor: "pointer",
            top: 10,
            position: "absolute",
          }}
        >
          {" "}
          <CancelIcon sx={{ borderRadius: "100%" }} />
        </div>
        <div
          style={{
            background: "#383636",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            // width:'100%'
          }}
        >
          <div
            style={{
              background: "transparent",
              fontWeight: 800,
              fontSize: "30px",
            }}
          >
            Interior contractor
          </div>
          <div
            style={{
              background: "transparent",
              color: "#a3a1a1",
              fontSize: "16px",
            }}
          >
            We take all kind of interior works
          </div>
        </div>
        <div style={{ background: "#383636",display:'flex',flexDirection:'column',paddingLeft:'2rem' }}>
          <form
            style={{
              background: "#383636",
              display: "flex",
              flexDirection: "column",
              // justifyContent: "space-between",
            }}
            action=""
          >
            <div
              style={{
                background: "#383636",
                margin: "10px 0px",
                display: "flex",
                flexDirection: "column",
                marginBottom: "1.5rem",
                width: "80%",
              }}
            >
              <label
                style={{ background: "transparent" }}
                htmlFor="name"
                // style={{
                //   display: "block",
                //   marginBottom: "0.5rem",
                //   fontSize: "0.875",
                //   lineHeight: "1.25rem",
                //   fontWeight: 500,
                //   color: "white",
                // }}
                // className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                style={{ padding: "0.5rem 0rem", outline: "none" }}
                className="bg-gray-50  border bg-transparent border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="FirstName LastName"
                required
              />
            </div>
            <div
              style={{
                background: "#383636",
                margin: "10px 0px",
                display: "flex",
                flexDirection: "column",
                marginBottom: "1rem",
                width: "80%",
              }}
            >
              <label
                style={{ background: "transparent" }}
                htmlFor="email"
                className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                style={{
                  background: "transparent",
                  padding: "0.5rem 0rem",
                  outline: "none",
                }}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div
              style={{
                background: "#383636",
                margin: "10px 0px",
                display: "flex",
                flexDirection: "column",
                marginBottom: "1rem",
                width: "80%",
              }}
              // className="flex flex-col mb-6 w-[80%]"
            >
              <label
                style={{ background: "transparent" }}
                htmlFor="number"
                className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Mobile Number
              </label>
              <input
                type="number"
                inputMode="numeric"
                id="number"
                style={{
                  background: "transparent",
                  padding: "0.5rem 0rem",
                  outline: "none",
                }}
                className="bg-gray-50 quantity  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="+91-1234567890"
                required
              />
            </div>
            <div
              style={{
                background: "#383636",
                margin: "10px 0px",
                display: "flex",
                flexDirection: "column",
                marginBottom: "1rem",
                width: "80%",
              }}
            >
              <label
                style={{ background: "transparent" }}
                htmlFor="message"
                className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Message
              </label>
              <textarea
                rows={6}
                type="text"
                id="message"
                style={{ background: "transparent", outline: "none" }}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Hey, i want an enquary"
                required
              />
            </div>
            <motion.div
              whileTap={{ scale: 0.9 }}
              style={{
                fontSize: "1.2rem",
                marginTop: "5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "orange",
                borderRadius: "1rem",
                cursor: "pointer",
                padding: ".2rem",
              }}
            >
              Submit
            </motion.div>
          </form>
        </div>
      </div>
    </Dialog>
  );
}
