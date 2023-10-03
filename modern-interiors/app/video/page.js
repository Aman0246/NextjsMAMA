import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "../../comonents/A.css";
import Link from "next/link";
export default function Video() {
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* <div style={{ position: "absolute", left: 5, top: 0 }}>
        
      </div> */}

      <div
        style={{
          fontSize: "2rem",
          position: "fixed",
          top: 0,
          backgroundColor: "#2b3341",
          width: "100%",
          alignItems:'center',
          display:'flex'
        }}
      >
        {" "}
        <Link href="/">
          <ArrowBackIcon
            sx={{ fontSize: "2rem", color: "orange", cursor: "pointer",marginRight:'2rem' }}
          ></ArrowBackIcon>
        </Link>
        PROJECT VIDEOS{" "}
      </div>
      <div
        style={{
          width: "95%",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 30,
          marginTop:'1.9rem'
        }}
      >
        <div style={{ padding: "1.5rem 1.5rem" }}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Oa61D402fa0?si=uUAZ3qCNLK57F05H&amp;start=15"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            autoplay
            allowfullscreen
          ></iframe>
          <div style={{ fontSize: "1.9rem" }}>Modification</div>
          <div>Removing cantilever</div>
          <div>For any Quary please contact us </div>
        </div>

        <div style={{ padding: "1.5rem 1.5rem" }}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/UgN5zF3pnlI?si=ZfGODROXLKYG9WIH&amp;start=15"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div style={{ fontSize: "1.9rem" }}>Interior Works</div>
          <div>interior works </div>
          <div>For any Quary please contact us </div>
        </div>

        <div style={{ padding: "1.5rem 1.5rem" }}>
          <iframe
            width="560"
            height="315"
            src="https://youtube.com/embed/d7TW1YsOGx0?si=dBO1-84QSbt0vejH&amp;start=15"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div style={{ fontSize: "1.9rem" }}>Running track repairing</div>
          <div>This repairing done at vidyavihar somaiya college</div>
          <div>For any Quary please contact us </div>
        </div>

        <div style={{ padding: "1.5rem 1.5rem" }}>
          <iframe
            width="560"
            height="315"
            src="https://youtube.com/embed/kfJBafz7ICY?si=DodvV_l1Pz_QWqf0&amp;start=15"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div style={{ fontSize: "1.9rem" }}>Waterproofing</div>
          <div>This work done at bandra</div>
          <div>For any Quary please contact us </div>
        </div>

        <div style={{ padding: "1.5rem 1.5rem" }}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/jbQfPoTQ3Ps?si=YT9HzcbXQSiOAxhL"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div style={{ fontSize: "1.9rem" }}>Long jump track</div>
          <div>This track done at vashi</div>
          <div>For any Quary please contact us </div>
        </div>

        <div style={{ padding: "1.5rem 1.5rem" }}>
          <iframe
            width="560"
            height="315"
            src="https://youtube.com/embed/CD_nVPHh5d0?si=MuqbcVxj1ffyQVGa&amp;start=15"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div style={{ fontSize: "1.9rem" }}>Building repairing</div>
          <div>This project done at matunga</div>
          <div>For any Quary please contact us </div>
        </div>

        {/* <iframe width="560" height="315" src="https://youtube.com/embed/HM-XJmJrblc?si=mCd1BtsBVFbrps2v&amp;start=15" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
      </div>
    </div>
  );
}
