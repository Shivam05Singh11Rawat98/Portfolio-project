import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlassCheers,faThermometerHalf,faPizzaSlice,faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons'

const Projects = () => {
  return (
    <div className='projects'>
        <h1 className='py-5'>my projects</h1>
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    <div className="box">
                    <div className="circle">
                     <FontAwesomeIcon className="icon" icon={faPizzaSlice} size="lg"/>
                     </div>
                        <h3>Food Ordering Web Application</h3>
                        <p>A laconic description of the project</p>
                    </div>
                </div>
                { /* */ }
                <div className="col-md-3 col-sm-6">
                    <div className="box">
                    <div className="circle"> 
                    <FontAwesomeIcon className="icon" icon={faThermometerHalf} size="lg"/>
                    </div>
                        <h3>Weather Web Application</h3>
                        <p>A laconic description of the project</p>
                    </div>
                </div>
                { /* */ }
                <div className="col-md-3 col-sm-6">
                    <div className="box">
                    <div className="circle">
                    <FontAwesomeIcon className="icon" icon={faGlassCheers} size="lg"/>
                    </div>
                        <h3>Cocktail Hub Web Application</h3>
                        <p>A laconic description of the project</p>
                    </div>
                </div>
                { /* */ }
                <div className="col-md-3 col-sm-6">
                    <div className="box">
                    <div className="circle">
                        <FontAwesomeIcon className="icon" icon={faMoneyBillAlt} size="lg"/>
                        </div>
                        <h3>Expense Tracker Web Application</h3>
                        <p>A laconic description of the project</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects