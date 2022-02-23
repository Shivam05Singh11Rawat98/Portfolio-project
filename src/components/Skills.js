import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faGlassCheers,faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons'
import {faReact,faNode, faSalesforce, faGithub} from '@fortawesome/free-brands-svg-icons'
const Skills = () => {
  return (
    <div className='skills mt-5'>
        <h1 className='py-5'>my skills</h1>
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="box">
                    <div className="circle">
                     <FontAwesomeIcon className="icon" icon={faReact} size="lg"/>
                     </div>
                        <h3>React</h3>
                        <p>front-end JavaScript library for building user interfaces based on UI components.</p>
                    </div>
                </div>
                { /* */ }
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="box">
                    <div className="circle"> 
                    <FontAwesomeIcon className="icon" icon={faNode} size="lg"/>
                    </div>
                        <h3>Node</h3>
                        <p>open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.</p>
                    </div>
                </div>
                { /* */ }
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="box">
                    <div className="circle">
                    <FontAwesomeIcon className="icon" icon={faSalesforce} size="lg"/>
                    </div>
                        <h3>Salesforce</h3>
                        <p>Salesforce is the world’s #1 customer relationship management (CRM) platform. </p>
                    </div>
                </div>
                { /* */ }
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="box">
                    <div className="circle">
                        <FontAwesomeIcon className="icon" icon={faGithub} size="lg"/>
                        </div>
                        <h3>Github</h3>
                        <p>provider of Internet hosting for software development and version control using Git</p>
                    </div>
                </div>
                { /* */ }
            </div>
        </div>
    </div>
  )
}

export default Skills