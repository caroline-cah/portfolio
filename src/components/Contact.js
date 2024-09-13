import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { send } from "emailjs-com";
import Confetti from "react-confetti";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = React.useState({ success: null, message: "" });
  const formRef = useRef(null);
  const [confettiSize, setConfettiSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (formRef.current) {
      setConfettiSize({
        width: formRef.current.offsetWidth,
        height: formRef.current.offsetHeight,
      });
    }
  }, [formRef.current]);

  const [hasAnimatedImg, setHasAnimatedImg] = useState(false);
  const [hasAnimatedForm, setHasAnimatedForm] = useState(false);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    send(
      "service_humjqtg",
      "template_6j70xgo",
      formDetails,
      "aCtL3Sw_JjxZjkosi"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setButtonText("Sent email!");
        setStatus({ success: true });
      })
      .catch((err) => {
        console.log("FAILED...", err);
        setStatus({
          success: false,
          message: "Something went wrong, please try again later.",
        });
      });
  };

  return (
    <section className="contact" id="connect" ref={formRef}>
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => {
                if (isVisible && !hasAnimatedImg) {
                  setHasAnimatedImg(true);
                }
                return (
                  <img
                    className={
                      hasAnimatedImg ? "animate__animated animate__zoomIn" : ""
                    }
                    src={contactImg}
                    alt="Contact Us"
                    style={{ borderRadius: "700px" }}
                  />
                );
              }}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => {
                if (isVisible && !hasAnimatedForm) {
                  setHasAnimatedForm(true);
                }
                return (
                  <div
                    className={
                      hasAnimatedForm ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <h2 style={{ cursor: "default", color: "#fff" }}>
                      Get In Touch
                    </h2>
                    <form onSubmit={handleSubmit}>
                      <Row>
                        <Col size={12} sm={6} className="px-1">
                          <input
                            style={{ cursor: "text" }}
                            type="text"
                            value={formDetails.firstName}
                            placeholder="First Name"
                            onChange={(e) =>
                              onFormUpdate("firstName", e.target.value)
                            }
                          />
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="text"
                            style={{ cursor: "text" }}
                            value={formDetails.lastName}
                            placeholder="Last Name"
                            onChange={(e) =>
                              onFormUpdate("lastName", e.target.value)
                            }
                          />
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="email"
                            style={{ cursor: "text" }}
                            value={formDetails.email}
                            placeholder="Email Address"
                            onChange={(e) =>
                              onFormUpdate("email", e.target.value)
                            }
                          />
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="tel"
                            style={{ cursor: "text" }}
                            value={formDetails.phone}
                            placeholder="Phone No."
                            onChange={(e) =>
                              onFormUpdate("phone", e.target.value)
                            }
                          />
                        </Col>
                        <Col size={12} className="px-1">
                          <textarea
                            style={{ cursor: "text" }}
                            rows="6"
                            value={formDetails.message}
                            placeholder="Message"
                            onChange={(e) =>
                              onFormUpdate("message", e.target.value)
                            }
                          ></textarea>
                          <button type="submit">
                            <span>{buttonText}</span>
                          </button>
                        </Col>
                        {status.success && (
                          <Confetti
                            width={confettiSize.width}
                            height={confettiSize.height}
                            numberOfPieces={200}
                            recycle={false}
                            onConfettiComplete={() =>
                              setStatus({ ...status, success: null })
                            }
                          />
                        )}
                      </Row>
                    </form>
                  </div>
                );
              }}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
