import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import header from "../assets/img/header.png";

import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["Software Engineer"];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h1>
                    {`Caroline Cah`}
                    <br />
                    <div className="typing-container">
                      <span
                        className="txt-rotate"
                        dataPeriod="1000"
                        data-rotate='[ "Software Engineer", " a Technology Enthusiast"]'
                      >
                        <span className="wrap">{text}</span>
                      </span>
                    </div>
                  </h1>
                  <p style={{ marginTop: "50px" }}>
                    Hello there. I am a Software Engineer based in Gothenburg,
                    Sweden. Currently developing websites, applications, plugins
                    and tools for Polestar.
                  </p>
                  <Router>
                    <HashLink to="#connect" style={{ textDecoration: "none" }}>
                      <button className="vvd">
                        <span style={{ color: "#333" }}>Let’s Connect</span>{" "}
                        <ArrowRightCircle size={25} style={{ color: "#333" }} />
                      </button>
                    </HashLink>
                  </Router>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img
                    src={header}
                    alt="Header Img"
                    className="header-image"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
