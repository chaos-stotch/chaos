import React from 'react'
import './contacts.css'
import { MdEmail } from 'react-icons/md'
import { FaDiscord } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import { useTranslation } from 'react-i18next'
import IMG1 from '../../images/chaos_pfp.png'
import IMG2 from '../../images/hisoka_pfp.jpeg'

function Contacts() {
	const { t } = useTranslation()

  return (
    <div className='contacts'>
        <h1 className='contactTitle'>
					{t("Staff Contact")}
        </h1>
        <div className="membersContacts">
            <div className="contactList">
                <img src={IMG1} alt="" className='pfp' />
                <div className="contactName">
                    Vitor
                </div>
                <div className="contactDescription">
                    {t("full-stack developer")}
                </div>
                <a href="mailto:chaos_stotch@proton.me">
                    <div className="contact">
                        <MdEmail className='icon'/>
                        <h4>chaos_stotch@proton.me</h4>
                    </div>
                </a>
                
                <a href="https://discordapp.com/users/1049084140059885720/" rel="noreferrer" target={'_blank'}>
                    <div className="contact">
                        <FaDiscord className='icon'/>
                        <h4>chaos#4139</h4>
                    </div>
                </a>

                <a href="https://wa.me/5519991168007" rel="noreferrer" target={'_blank'}>
                <div className="contact">
                        <IoLogoWhatsapp className='icon'/>
                        <h4>+55 19 99116-8007</h4>
                    </div> 
                </a>
            </div>
            <div className="contactList v2">
                <img src={IMG2} alt="" className='pfp v2' />
                <div className="contactName">
                    Samuel
                </div>
                <div className="contactDescription">
                    {t("sales manager")}
                </div>
                <a href="samchaoticseller@gmail.com">
                    <div className="contact">
                        <MdEmail className='icon'/>
                        <h4>samchaoticseller@gmail.com</h4>
                    </div>
                </a>
                
                <a href="https://discordapp.com/users/616992875850367003/" rel="noreferrer" target={'_blank'}>
                    <div className="contact">
                        <FaDiscord className='icon'/>
                        <h4>hisoka#2012</h4>
                    </div>
                </a>

                <a href="https://wa.me/5519994597370" rel="noreferrer" target={'_blank'}>
                <div className="contact">
                        <IoLogoWhatsapp className='icon'/>
                        <h4>+55 19 99459-7370</h4>
                    </div> 
                </a>
            </div>
        </div>
        
    </div>
  )
}

export default Contacts