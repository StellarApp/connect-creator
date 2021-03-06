import React from "react";
import styled from "styled-components";
import defaultTheme from "./Theme";
import CircleIcon from "./CircleIcon";
const Container = styled.div`
  background-color: ${defaultTheme.bg.primary};
  display: grid;
  padding: 1.5rem;
  border-radius: 0.5rem;
  grid-template-columns: auto 3rem;
  grid-template-rows: 3rem auto auto;
  justify-items: stretch;
  aligh-items: center;
  transition: ${defaultTheme.animations.hover};
  &:hover {
    box-shadow: ${defaultTheme.shadows.hover};
  }
`;

const IconContainer = styled.div`
  grid-area: 1/2/2/3;
`;

const Title = styled.p`
  grid-area: 1/1/2/2;
  place-self: center stretch;
`;

const Num = styled.h1`
  grid-area: 2/1/3/3;
  place-self: center stretch;
  padding: 1rem 0;
`;
const Trend = styled.p`
  grid-area: 3/1/4/3;
  place-self: center stretch;

  color: ${defaultTheme.textColor.secondary};
`;
const MediaStat = ({ name, value, trend, bg, svg }) => {
  return (
    <Container>
      <IconContainer>
        <CircleIcon bg={bg} svg={svg}></CircleIcon>
      </IconContainer>
      <Title>{name}</Title>
      <Num>{value}</Num>
      {trend ? <Trend>{trend}</Trend> : ""}
    </Container>
  );
};

export default MediaStat;
