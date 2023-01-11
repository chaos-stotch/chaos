import React from 'react'
import './contacts.css'
import { MdEmail } from 'react-icons/md'
import { FaDiscord } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'

function Contacts() {
  return (
    <div className='contacts'>
        <h1 className='contactTitle'>Contact</h1>
        <div className="contactList">
            <a href="mailto:chaos_stotch@proton.me">
                <div className="contact">
                    <MdEmail className='icon'/>
                    <h4>chaos_stotch@proton.me</h4>
                </div>
            </a>
            
            <a href="https://discordapp.com/users/1049084140059885720/">
                <div className="contact">
                    <FaDiscord className='icon'/>
                    <h4>chaos#4139</h4>
                </div>
            </a>

            <a href="https://wa.me/5519991168007">
               <div className="contact">
                    <IoLogoWhatsapp className='icon'/>
                    <h4>+55 19 99116-8007</h4>
                </div> 
            </a>
        </div>
        
    </div>
  )
}

export default Contacts