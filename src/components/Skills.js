import react from "../assets/img/react.png";
import ts from "../assets/img/ts.png";
import js from "../assets/img/js.png";
import graphql from "../assets/img/graphql.png";
import aws from "../assets/img/aws.png";
import c from "../assets/img/c.png";
import chess from "../assets/img/SkillsIcons/chess.png";
import gamepad from "../assets/img/SkillsIcons/gamepad.png";
import playingcards from "../assets/img/SkillsIcons/playing-cards.png";
import skill from "../assets/img/SkillsIcons/skill.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          color: "#fff",
          margin: "30px",
        }}
      >
        <h2 style={{ fontSize: "50px", marginTop: "160px" }}>
          What lead me to programming?
        </h2>
      </div>

      <section className="skills-container" id="skills">
        <div className="skill-bx">
          <div className="item">
            <img src={chess} alt="Chess" />
          </div>
          <h2>Problem solving</h2>
          <p>
            Chess and logical games have always captivated me. They're a blend
            of strategy, foresight, and pattern recognition. Every move demands
            calculated decisions, mirroring the intricate dance of challenges in
            life. These games sharpen my cognitive skills, teaching patience and
            adaptability. To me, they symbolize the beauty of structured thought
            and the joy in overcoming obstacles.
          </p>
        </div>

        <div className="skill-bx">
          <div className="item">
            <img src={gamepad} alt="Gamepad" />
          </div>
          <h2>Logical Games</h2>
          <p>
            Playing RPGs isn't just about having fun; it's like a workout for
            your brain! In these games, you're dropped into wild worlds with
            cool challenges. You gotta think on your feet, team up with others,
            and make quick decisions. Whether you're figuring out a quest or
            dealing with game characters, RPGs teach you there's always a way to
            crack a problem, and sometimes, it's not the obvious one!
          </p>
        </div>

        <div className="skill-bx">
          <div className="item">
            <img src={playingcards} alt="Cards" />
          </div>
          <h2>Music & Coding</h2>
          <p>
            I make music. What I love about that is that after playing in a band
            since 6th grade was to control and compose a song. Focus on parts
            that I like in different parts of instruments.
          </p>
        </div>

        <div className="skill-bx">
          <div className="item">
            <img src={skill} alt="Brain Lightbulb" />
          </div>
          <h2>Innovation & Ideas</h2>
          <p>
            Innovative thinking and coming up with new ideas is essential in
            coding. Being able to think outside the box and approach problems
            from different angles can make all the difference.
          </p>
        </div>
      </section>
    </>
  );
};
