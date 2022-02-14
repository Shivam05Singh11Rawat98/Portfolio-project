import React from 'react';
import Author from '../shivam.jpeg';

const About = () => {
  return (
    <div className='container py-5'>
        <div className="row">
            <div className="col-lg-6 col-xm-12">
                <div className="photo-wrap mb-5">
                    <img className='profile-img' src={Author} alt="Author"/>
                </div>
            </div>
            <div className="col-lg-6 col-xm-12">
                <h1 className='about-heading'>about me</h1>
                <p>I am Shivam Singh Rawat.Lorem Ipsum 
                 is simply dummy text of the printing and typesetting
                 industry. Lorem Ipsum has been the industry's standard 
                 dummy text ever since the 1500s, when an unknown printer
                  took a galley of type and scrambled it to make a type 
                  specimen book. It has survived not only five centuries
                  , but also the leap into electronic typesetting, 
                  remaining essentially unchanged. It was popularised in
                   the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop
                 publishing software like Aldus PageMaker including 
                 versions of Lorem Ipsum.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About