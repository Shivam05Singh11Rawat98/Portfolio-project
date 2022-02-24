import React from "react";
import { Link} from 'react-scroll';
import {
    FacebookShareButton,
    FacebookIcon,
    TelegramShareButton,
    TelegramIcon,
    LinkedinShareButton,
    LinkedinIcon,
    WhatsappShareButton,
    WhatsappIcon
} from "react-share"

const Footer = () => {
  return (
    <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 address-details">
                    <div className="d-flex">
                        <p>440/10 New Colony Karehra, Mohan Nagar, Ghaziabad, 201007</p>
                    </div>
                    <div className="d-flex">
                        <a href="9523126405">+919523126405</a>
                    </div>
                    <div className="d-flex">
                        <p>shivambitid007@gmail.com</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-2 col-sm-6 footer-nav-link">
                    <div className="row">
                        <div className="col">
                            <Link smooth={true} to="home" offset={-110} className="footer-nav"  >Home</Link>
                            <br />
                            <Link smooth={true} to="about" offset={-110} className="footer-nav"  >About Me</Link>
                            <br />
                            <Link smooth={true} to="projects" offset={-110} className="footer-nav"  >Projects</Link>
                        </div>
                        <div className="col">
                            <Link smooth={true} to="education" offset={-110} className="footer-nav"  >Education</Link>
                            <br />
                            <Link smooth={true} to="skills" offset={-110} className="footer-nav"  >Skills</Link>
                            <br />
                            <Link smooth={true} to="contact" offset={-110} className="footer-nav"  >Contact</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-6 align-text-center">
                    <div className="d-flex justify-content-center">
                        <FacebookShareButton
                         url="https://github.com/Shivam05Singh11Rawat98"
                         quote={"Full stack Developer"}
                         hashtag="#JavaScript"
                        >
                        <FacebookIcon className="mx-3" size={36}/>
                        </FacebookShareButton>
                        <TelegramShareButton
                         url="https://github.com/Shivam05Singh11Rawat98"
                         quote={"Full stack Developer"}
                         hashtag="#JavaScript"
                        >
                        <TelegramIcon className="mx-3" size={36}/>
                        </TelegramShareButton>
                        <LinkedinShareButton
                         url="https://github.com/Shivam05Singh11Rawat98"
                         quote={"Full stack Developer"}
                         hashtag="#JavaScript"
                        >
                        <LinkedinIcon className="mx-3" size={36}/>
                        </LinkedinShareButton>
                        <WhatsappShareButton
                         url="https://github.com/Shivam05Singh11Rawat98"
                         quote={"Full stack Developer"}
                         hashtag="#JavaScript"
                        >
                        <WhatsappIcon className="mx-3" size={36}/>
                        </WhatsappShareButton>
                    </div>
                    <div className="py-3 text-center">
                        Copyright&copy;
                        {new Date().getFullYear()}&nbsp;Agyani || All Rights Reserved
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer