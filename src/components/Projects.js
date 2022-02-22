/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
//images
import Cocktail from "../images/Cocktail.png";
import Expense from "../images/Expense.png";
import Cart from "../images/Cart.png";
import Cafe from "../images/Cafe.png";
//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons/faSearchPlus';
//react popup
import {PopupboxManager,PopupboxContainer} from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css";


const Projects = () => {

    const openFirstProject = ()=>{
        const content = (
            <>
                <img className="project-img-popup" src={Cocktail} alt="First Project"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo atque vero asperiores
                </p>
                <b>GitHub:</b> <a className="hyper-link"  onClick={()=> window.open("https://github.com/Shivam05Singh11Rawat98/cocktail-app")}>https://github.com/Shivam05Singh11Rawat98/cocktail-app</a>
            </>
        )
        PopupboxManager.open({content});
        PopupboxManager.update({
            content,
            config: {
                 titleBar: {
                     text: "Cocktail Search",
                },
            },
         });
    }

    const popupboxFirstProject = {
        titleBar: {
            enable: true,
            text: "Cocktail Search"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    const openSecondProject = ()=>{
        const content = (
            <>
                <img className="project-img-popup" src={Expense} alt="Second Project"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo atque vero asperiores
                </p>
                <b>GitHub:</b> <a className="hyper-link"  onClick={()=> window.open("https://github.com/Shivam05Singh11Rawat98/myexpense-app")}>https://github.com/Shivam05Singh11Rawat98/myexpense-app</a>
            </>
        )
        PopupboxManager.open({content});
        PopupboxManager.update({
            content,
            config: {
                 titleBar: {
                     text: "Expense",
                },
            },
         });
    }

    const popupboxSecondProject = {
        

        titleBar: {
            enable: true,
            text: "Expense"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    const openThirdProject = ()=>{
        const content = (
            <>
                <img className="project-img-popup" src={Cafe} alt="Third Project"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo atque vero asperiores
                </p>
                <b>GitHub:</b> <a className="hyper-link"  onClick={()=> window.open("https://github.com/Shivam05Singh11Rawat98/cafe-app")}>https://github.com/Shivam05Singh11Rawat98/cafe-app</a>
            </>
        )
        PopupboxManager.open({content});
        PopupboxManager.update({
            content,
            config: {
                 titleBar: {
                     text: "Cafe",
                },
            },
         });
    }

    const popupboxThirdProject = {
        

        titleBar: {
            enable: true,
            text: "Cafe"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    const openFourthProject = ()=>{
        const content = (
            <>
                <img className="project-img-popup" src={Cart} alt="Fourth Project"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo atque vero asperiores
                </p>
                <b>GitHub:</b> <a className="hyper-link"  onClick={()=> window.open("https://github.com/Shivam05Singh11Rawat98/cafe-app")}>https://github.com/Shivam05Singh11Rawat98/cafe-app</a>
            </>
        )
        PopupboxManager.open({content});
        PopupboxManager.update({
            content,
            config: {
                 titleBar: {
                     text: "Cart",
                },
            },
         });
    }

    const popupboxFourthProject = {
        

        titleBar: {
            enable: true,
            text: "Cart"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

  return (
    <div className='project-wrapper'>
        <div className="container">
            <h1 className="text-uppercase text-center py-5">Projects</h1>

            <div className="image-box-wrapper row justify-content-center ">

                <div className="project-img-box" onClick={openFirstProject}>
                    <img src={Cocktail} alt="" className="project-image" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
                </div>
            {/* - */}
                <div className="project-img-box" onClick={openSecondProject}>
                    <img src={Expense} alt="" className="project-image" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
                </div>
            {/* - */}
                <div className="project-img-box" onClick={openThirdProject}>
                    <img src={Cafe} alt="" className="project-image" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
                </div>
            {/* - */}
                <div className="project-img-box" onClick={openFourthProject}>
                    <img src={Cart} alt="" className="project-image" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
                </div>
            {/* - */}
            </div> 
        </div>
        <PopupboxContainer {...popupboxFirstProject} />
        <PopupboxContainer {...popupboxSecondProject} />
        <PopupboxContainer {...popupboxThirdProject} />
        <PopupboxContainer {...popupboxFourthProject} />
    </div>
  )
}

export default Projects