import React from "react"
// import {TwitterButton,EmailButton}
import "./socials.css"
import { SocialIcon } from 'react-social-icons'
const Socials=()=>{
    return(
        <div className="flex flex-row">
            <SocialIcon url="https://github.com/nikunj-oss" className="custom-class" target="_blank" fgColor="currentColor"></SocialIcon>
            <div style={{ marginLeft: '10px' }}></div> 
            <SocialIcon url="https://t.me/nikunjgoel2003" target="_blank"></SocialIcon>
            <div style={{ marginLeft: '10px' }}></div> 
            <SocialIcon url="https://instagram.com/nikunjgoel_2003" target="_blank"></SocialIcon>
            <div style={{ marginLeft: '10px' }}></div> 
            <SocialIcon url="https://wa.me/qr/KJXMAKQZWMUBO1" network="whatsapp" target="_blank"></SocialIcon>
            <div style={{ marginLeft: '10px' }}></div> 
            <SocialIcon url="https://www.linkedin.com/in/nikunj-goel-480042212/" target="_blank"></SocialIcon>
            <div style={{ marginLeft: '10px' }}></div> 
            <SocialIcon url="https://leetcode.com/u/nikunjgoel2003/" target="_blank"></SocialIcon>
         </div>
    
    )
}

export default Socials;