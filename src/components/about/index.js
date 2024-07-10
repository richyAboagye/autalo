import React from 'react'
import abimg from '../../images/about/video1.jpg'
import VideoModal from '../ModalVideo'
import { Link } from "react-router-dom";
import './style.css'

const About = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <div className="hx-about-style-2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="hx-about-content">
                            <div className="hx-site-title">
                                <span>About Our Company</span>
                                <h2>How We Can Help you</h2>
                            </div>
                            <p> We are dedicated to providing comprehensive auto repair and maintenance services to keep your vehicle running smoothly and safely. Our advanced diagnostic equipment allows us to accurately identify and troubleshoot any issues your vehicle may have. From check engine lights to mysterious noises, we can pinpoint the problem and provide effective solutions.</p>
                            <p>Regular maintenance is key to the longevity and performance of your vehicle. We offer a full range of maintenance services, including oil changes, tire rotation and balancing, brake inspection and service, fluid checks and top-offs, battery testing and replacement, and filter replacements.</p>
                            <div className="btns">
                                <div className="btn-style"><Link onClick={ClickHandler} to="/about">More About us</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12 col-m">
                        <div className="hx-about-img">
                        <img src={abimg} alt=""/> 
                        </div>
                        <div className="video-btn">
                            <VideoModal/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;