import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  padding: 5px;
  user-select: none;
  position: fixed;
  top: 0;
  right: 0;
  font-family: times;
  z-index: 10;
`;

const StyledText = styled.h4`
  all: unset;
  opacity: 0.8;
  display: block;
  font-weight: normal;
  font-size: 12px;
  margin-bottom: 5px;
`;

export default () => (
  <Footer>
    <StyledText>Heesang Mark Whang</StyledText>
    <StyledText>BBST465: Pilgrim's Progress</StyledText>
    <StyledText>Professor Andy Draycott</StyledText>
  </Footer>
);
