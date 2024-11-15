import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import Flip from "gsap/Flip";
import React, { useEffect } from "react";
import { Page } from "../../components/Page";
import { blue, green, yellow, yell,white,blueis } from "../../utils";
import { Educations, Experince, Paragraph, SkillsWrapper, Text } from "./About.styled";
import { AboutItem } from "./AboutItem";
import Skills from "./SkillBall";
import dyp from "../../assets/images/dyp.png";
import up from "../../assets/images/up.png";
import sos from "../../assets/images/sos.png";
import kls from "../../assets/images/kls.png";
import sap from "../../assets/images/sap.png";
import cisv from "../../assets/images/cisv.jpg";
import cube from "../../assets/images/cube.jpg";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

export const About = () => {
  const { ref, inView } = useInView({});
  const [show, setShow] = useState(inView);
  useEffect(() => {
    setShow(inView);
  }, [inView]);

  useEffect(() => {
    gsap.registerPlugin(Flip);
    let cards = document.querySelectorAll(".about-item");
    cards.forEach((card, i) => {
      if (i === 0) {
        card.classList.add("active");
      }
      card.addEventListener("mouseenter", (e) => {
        if (card.classList.contains("active")) {
          return;
        }
        const state = Flip.getState(cards);
        cards.forEach((c) => {
          c.classList.remove("active");
        });
        card.classList.add("active");
        Flip.from(state, {
          duration: 0.5,
          ease: "elastic.out(1,0.9)",
          absolute: true,
        });
      });
    });
  }, []);
  return (
    <div ref={ref}>
      <Page header="About">
        <Text>
          <Paragraph>
            I'm an enthusiastic developer dedicated to continuous learning and tackling new challenges.
            As a team player, I'm eager to learn and help others.
            <br />
            <br />
            I'm also a big fan of rock climbing and playing the guitar. 
            Also in my free time, I love to enjoy some video games with friends or just watch a good movie.
          </Paragraph>
          <Educations>
            <AboutItem
              color={yell}
              active
              data={{
                title: "Óbudai University ",
                p: "Business Informatics BSc (2020-2024) ",
                image: dyp,
              }}
            />
            <AboutItem
              color={white}
              data={{
                title: "Up Academy",
                p: "Start up and business management (2018-2019)",
                image: up,
              }}
            />
            <AboutItem
              color={blueis}
              data={{
                title: "BMSZC Neumann Janos",
                p: "IT Secondary School  (2016-2020)",
                image: sos,
              }}
            />
          </Educations>
          <Experince>
            <AboutItem
              color={blue}
              data={{
                title: "KLS 2000 Kft",
                p: "Internship (2023-2024)",
                image: kls,
              }}
            />
            <AboutItem
              color={blue}
              data={{
                title: "Neumann Cube Project",
                p: "Project manager (2017–2018)",
                image: cube,
              }}
            />
            <AboutItem
              color={yellow}
              data={{
                title: "CISV",
                p: "Volunteer International Staff Member / Junior Representation (2016-2023)",
                image: cisv,
              }}
            />
          </Experince>
        </Text>
        <SkillsWrapper>
          {show ? (
            <Canvas camera={{ position: [0, 0, 18] }}>
              <Skills />
            </Canvas>
          ) : (
            `${inView}`
          )}
        </SkillsWrapper>
      </Page>
    </div>
  );
};
