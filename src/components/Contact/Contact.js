import React, { useRef } from "react";
import "./Contact.css";
import { Container } from "react-bootstrap";
import emailjs from "emailjs-com";
import swal from "sweetalert";

const Contact = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_vwaei79', form.current, 'user_rrPaABvcffCf6jyUjRZq3')
      .then((result) => {
          if (result.text) {
            swal("Email Send", "", "success");
          }
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };


  return (
    <div className="my-5">
      <div>
        <h2
          style={{ textAlign: "center", color: "#2c3e50", fontWeight: "700" }}
        >
          Contact With Me!
        </h2>
        <Container>
          <div className="form-area px-2">
            <form  ref={form} onSubmit={sendEmail}>
              <input
                className="form-control"
                type="text"
                placeholder="Name"
                name="name"
                required
              />
              <input
                className="form-control"
                type="email"
                placeholder="Your Email"
                name="email"
                required
              />
              <input
                className="form-control"
                type="text"
                placeholder="Subject"
                name="subject"
                required
              />
              <textarea className="form-control" placeholder="Message" name="message" />
              <div className="text-center">
                <button className="mailBtn" type="submit">
                  Send Email
                </button>
              </div>
            </form>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
