import React from 'react'
// import GoogleMapReact from 'google-map-react';
export default function Maps() {
      return (
        <div style={{ height: '70vh', width: '100vw',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center' }}>

          <div style={{fontSize:'3rem'}}>MAP</div>
        <div style={{width:'80%',height:'100%'}} >
<iframe style={{width:'100%',height:'100%',borderRadius:'1.5rem'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7541.433734678542!2d72.83522389367776!3d19.076182204608315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9b70e184fb3%3A0x159a8b2fec41a44d!2sShop%20No%203!5e0!3m2!1sen!2sin!4v1696345954951!5m2!1sen!2sin"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </div>
      );
    }