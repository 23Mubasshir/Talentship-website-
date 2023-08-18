import React from "react";
import gc from "./assets/gc.gif";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {
  //TODO 3 : Change YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_PUBLIC_KEY from the emailjs account 
  //TODO 4 : Create a template  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Message successfully sent',
        showConfirmButton: false,
        timer: 1700
      })
  };

  return (
    <div className="container">
      <div class="text-center mt-5">
        <h1>Connect with Us</h1>
        <h6>
          We're here to answer your questions, explore partnerships, and engage
          in meaningful conversations.
          <br /> Reach out to us for inquiries, collaboration opportunities, or
          to learn more about Talentship Global Advisory Forum.
        </h6>
      </div>
      <section class="contact-section">
        <div class="contact-body">
          <div class="contact-info">
            <div>
              <span>
                <PhoneIcon fontSize="large" className="mb-2" />
              </span>
              <span>Phone No.</span>
              <span class="text">1-2392-23928-2</span>
            </div>
            <div>
              <span>
                <EmailIcon fontSize="large" className="mb-2" />
              </span>
              <span>E-mail Id </span>
              <span class="text">1-2392-23928-2</span>
            </div>
            <div>
              <span>
                <LinkedInIcon fontSize="large" className="mb-2" />
              </span>
              <span>LinkedIn</span>
              <span class="text">mail@company.com</span>
            </div>
            <div>
              <span>
                <TwitterIcon fontSize="large" className="mb-2" />
              </span>
              <span>Twitter</span>
              <span class="text">mail@company.com</span>
            </div>
          </div>

          <div class="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="First Name"
                  name="first-name"
                  required
                />
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last Name"
                  name="last-name"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  class="form-control"
                  placeholder="E-mail"
                  name="email"
                  required
                />
                <input
                  type="text"
                  class="form-control"
                  placeholder="Phone"
                  name="phone"
                  required
                />
              </div>
              <textarea
                rows="5"
                placeholder="Message"
                class="form-control"
                name="message"
                required
              ></textarea>
              <input
                className="btn btn-brand my-2"
                type="submit"
                value="Send"
              />
            </form>

            <div>
              <img
                src={gc}
                className="img-fluid"
                alt="Talentship Global Advisory Forum"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
