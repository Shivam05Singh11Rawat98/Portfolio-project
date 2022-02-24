import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form";

const Contacts = () => {
  
  const [successMessage, setSuccessMessage] = useState("");

  const { register, handleSubmit, formState: { errors } } = useForm();  

  const onSubmit = (data,r) =>{
    sendEmail(
        SERVICE_ID,
        TEMPLATE_ID,
        {
            name:data.name,
            phone:data.phone,
            email:data.email,
            subject:data.subject,
            description:data.description
        },
        USER_ID,
        )
        r.target.reset();
  }
  const form = useRef();
  const SERVICE_ID = "service_ID";
  const TEMPLATE_ID = "template_ID";
  const USER_ID = "user_aCJXITZQkOTnHc5iRFhWW";

  const sendEmail = (SERVICE_ID, TEMPLATE_ID, variables, USER_ID) => {
    emailjs.send(SERVICE_ID, TEMPLATE_ID, variables, USER_ID)
      .then(() => {
          setSuccessMessage("Form sent successfully! I'll reach out to you as soon as possible");
      }).catch(err=> console.log(err));
  };
  return (
    <div id="contact" className="contact">
    <form ref={form} onSubmit={handleSubmit(onSubmit)}>
        <div className="text-center">
            <h1>contact me</h1>
            <p>Please fill out the form and message me for any collaborative or hiring opportunity. I am just one message away. I'll write back as soon as possible</p>
            <span className="success-msg">{successMessage}</span>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-xs-12">
                    {/* INPUT NAME */}
                    <div className="text-center">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        name="name"
                        {...register("name", {
                        required: "Please enter your name",
                        maxLength: {
                        value: 20,
                        message: "Please enter a name with fewer than 20 characters",
                    },
                  })}
                    />
                    <div className="line"></div>
                    </div>
                    <span className="error-message">
                        {errors.name && errors.name.message}
                    </span>
                    {/* INPUT PHONE */}
                    <div className="text-center">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Phone Number"
                        name="phone"
                        {...register("phone", {
                        required: "Please add your phone no.",
                   })}
                    />
                    <div className="line"></div>
                    </div>
                    <span className="error-message">
                        {errors.phone && errors.phone.message}
                    </span>
                    {/* INPUT EMAIL */}
                    <div className="text-center">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        {...register("email", {
                        required: "Please enter you email address",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "invalid email address"
                        }
                        })}
                    />
                    <div className="line"></div>
                    </div>
                    <span className="error-message">
                    {errors.email && errors.email.message}
                    </span>
                    {/* INPUT SUBJECT */}
                    <div className="text-center">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                        name="subject"
                        {...register("subject", {
                        required: "OOPs you forgot to add the subject",
                   })}
                    />
                    <div className="line"></div>
                    </div>
                    <span className="error-message">
                    {errors.subject && errors.subject.message}
                    </span>
                </div>
                <div className="col-md-6 col-xs-12">
                    {/* INPUT SUBJECT */}
                    <div className="text-center">
                    <textarea
                        type="text"
                        className="form-control"
                        placeholder="Pelase write your message here"
                        name="description"
                        {...register("description", {
                        required: "Please enter any message for me...",
                   })}
                    ></textarea>
                    <div className="line"></div>
                    </div>
                    <span className="error-message">
                    {errors.description && errors.description.message}
                    </span>
                    <button className="btn-main-offer contact-btn" type="submit">
                        contact me
                    </button>
                </div>
            </div>
        </div>
        </form>
    </div>
  )
}

export default Contacts