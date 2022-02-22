import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faGlassCheers,faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons'
import {faReact,faNode, faSalesforce, faHtml5} from '@fortawesome/free-brands-svg-icons'
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
                        <p>A laconic description of the project</p>
                    </div>
                </div>
                { /* */ }
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="box">
                    <div className="circle"> 
                    <FontAwesomeIcon className="icon" icon={faNode} size="lg"/>
                    </div>
                        <h3>Node</h3>
                        <p>A laconic description of the project</p>
                    </div>
                </div>
                { /* */ }
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="box">
                    <div className="circle">
                    <FontAwesomeIcon className="icon" icon={faSalesforce} size="lg"/>
                    </div>
                        <h3>Salesforce</h3>
                        <p>A laconic description of the project</p>
                    </div>
                </div>
                { /* */ }
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="box">
                    <div className="circle">
                        <FontAwesomeIcon className="icon" icon={faHtml5} size="lg"/>
                        </div>
                        <h3>HTML5</h3>
                        <p>A laconic description of the project</p>
                    </div>
                </div>
                { /* */ }
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="box">
                    <div className="circle">
                        <img className="cplusplus" src="https://raw.githubusercontent.com/abranhe/programming-languages-logos/30a0ecf99188be99a3c75a00efb5be61eca9c382/src/cpp/cpp.svg" alt="cpp" />
                        </div>
                        <h3>HTML5</h3>
                        <p>A laconic description of the project</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills