import { Canvas } from "@react-three/fiber";
import React, { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { NavbarContext } from "../../context";
import main from "../../assets/images/main.jpg";
import {
  AnimatedSpan,
  PictureContainer,
  HomeWrapper,
  Name,
  Position,
  TextContainer,
} from "./Home.styled";

export const Home = () => {
  const { ref, inView } = useInView({
    threshold: 1,
  });

  const setPage = useContext(NavbarContext);

  useEffect(() => {
    if (inView) {
      setPage("home");
    }
  }, [inView]);

  const produceSpans = (name) => {
    return name.split("").map((letter, index) => (
      <AnimatedSpan
        index={index}
        letter={letter}
        aria-hidden="true"
        key={index}
      >
        {letter}
      </AnimatedSpan>
    ));
  };
  return (
    <HomeWrapper ref={ref} id="home-page">
      <TextContainer>
        <Name>Nagy Ádám Zénó</Name>
        <Position>
          <div className="text first" aria-label="Developer">
            {produceSpans("Developer")}
          </div>
          <div className="text second" aria-label="Business Informatics">
            {produceSpans("Business Informatics")}
          </div>
        </Position>
      </TextContainer>
      <PictureContainer>
        <div className = "box">
          <div className = "contect">
          <img src={main} alt="main" />
          </div>
        </div>
      </PictureContainer>
    </HomeWrapper>
  );
};
