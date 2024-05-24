import React from "react";
import { SocialIcon } from 'react-social-icons';

const Socials = () => {
    return (
        <div className="flex flex-row">
            <SocialIcon 
                url="https://github.com/nikunj-oss" 
                className="text-black hover:text-gray-800 hover:scale-110 transition-transform duration-300" 
                target="_blank" 
            />
            <div className="ml-2"></div> 
            <SocialIcon 
                url="https://t.me/nikunjgoel2003" 
                className="hover:text-blue-500 hover:scale-110 transition-transform duration-300" 
                target="_blank" 
            />
            <div className="ml-2"></div> 
            <SocialIcon 
                url="https://instagram.com/nikunjgoel_2003" 
                className="hover:text-pink-600 hover:scale-110 transition-transform duration-300" 
                target="_blank" 
            />
            <div className="ml-2"></div> 
            <SocialIcon 
                url="https://wa.me/qr/KJXMAKQZWMUBO1" 
                network="whatsapp" 
                className="hover:text-green-500 hover:scale-110 transition-transform duration-300" 
                target="_blank" 
            />
            <div className="ml-2"></div> 
            <SocialIcon 
                url="https://www.linkedin.com/in/nikunj-goel-480042212/" 
                className="hover:text-blue-700 hover:scale-110 transition-transform duration-300" 
                target="_blank" 
            />
            <div className="ml-2"></div> 
            <SocialIcon 
                url="https://leetcode.com/u/nikunjgoel2003/" 
                className="hover:text-yellow-500 hover:scale-110 transition-transform duration-300" 
                target="_blank" 
            />
         </div>
    );
}

export default Socials;
