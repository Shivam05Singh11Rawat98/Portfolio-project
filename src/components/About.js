import React from 'react';
import Author from '../shivam.jpeg';

const About = () => {
  return (
    <div className='container mt-3 py-5'>
        <div className="row">
            <div className="col-lg-6 col-xm-12">
                <div className="photo-wrap mb-5">
                    <img className='profile-img' src={Author} alt="Author"/>
                </div>
            </div>
            <div className="col-lg-6 col-xm-12">
                <h1 className='about-heading'>about me</h1>
                <div className="about-text">
                    <p>I am Shivam Singh Rawat. I am a Software Engineer,
                    currently working as a Salesforce Developer/Quote to Cash Developer.
                    I completed my B.E from Birla Institute of Technolgy Mesra in 2021.
                    I have done many Web Development projects and I have worked in Salesforce as well.  
                    </p>
                    <p className='about-quote'>Agyani is a sanskrit word that means someone who doesn't have knowledge.
                     This makes me believe that there is a lot to learn and keeps me motivated to learn new things.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About