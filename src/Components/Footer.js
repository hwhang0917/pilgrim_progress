import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  padding: 5px;
  user-select: none;
  position: fixed;
  bottom: 0;
  right: 0;
  font-family: times;
`;

const StyledText = styled.h4`
  all: unset;
  display: block;
  font-weight: normal;
  font-size: 15px;
  margin-bottom: 5px;
`;

export default () => (
  <Footer>
    <StyledText>Heesang Mark Whang</StyledText>
    <StyledText>BBST465: Pilgrim's Progress</StyledText>
    <StyledText>Professor Andy Draycott</StyledText>
  </Footer>
);
