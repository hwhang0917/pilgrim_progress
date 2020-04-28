import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FA from "react-fontawesome";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: -20px;
  left: 0;
  width: 100%;
  height: 110%;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
  transform: translateX(-100px);
  opacity: 0;
  animation: showContent 1s ease-in-out forwards;
  @keyframes showContent {
    from {
      transform: translateX(-100px);
      opacity: 0;
    }
    to {
      transform: none;
      opacity: 1;
    }
  }
`;

const Data = styled.div`
  width: 70%;
  margin-left: 50px;
`;

const Title = styled.h1`
  font-family: "Girassol", cursive;
  font-size: 80px;
  font-weight: 600;
  user-select: none;
  text-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
  animation: breatheText 5s ease-in-out infinite;

  @keyframes breatheText {
    0% {
      text-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
    }
    50% {
      text-shadow: 20px 20px 20px rgba(0, 0, 0, 0.3);
    }
    100% {
      text-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
    }
  }
`;

const InfoContainer = styled.div`
  margin: 20px 0;
`;

const Info = styled.span`
  font-size: 18px;
`;

const Divider = styled.span`
  margin: 0px 10px;
`;

const Overview = styled.p`
  width: 80%;
  font-size: 15px;
  opacity: 0.9;
  line-height: 1.5;
  margin-bottom: 30px;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 15px;
  box-shadow: 10px 10px 61px -12px rgba(0, 0, 0, 0.53);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const StyledAnchor = styled.a`
  color: #3498db;
  text-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
  transition-duration: 0.2s;
  &:hover {
    color: #2ecc71;
  }
`;

const StyledLink = styled(Link)`
  color: #3498db;
  text-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
  transition-duration: 0.2s;
  &:hover {
    color: #2ecc71;
  }
`;

const AdaptationBox = styled.div`
  width: 50%;
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AdaptationLink = styled.a`
  display: flex;
  align-items: center;
  margin: 5px 0px;
  &:hover {
    opacity: 0.8;
  }
`;

const AdaptationTitle = styled.span`
  margin-left: 15px;
`;

export default class extends Component {
  render() {
    return (
      <Container>
        <Backdrop
          bgImage={`https://images.unsplash.com/photo-1560686623-6d1356c6f446?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80`}
        />
        <Content>
          <Cover
            bgImage={`https://timctaylor.files.wordpress.com/2012/01/pilgrims_progress_first_edition_1678.jpg`}
          />
          <Data>
            <Title>The Pilgrim's Progress</Title>
            <InfoContainer>
              <Info>by John Bunyan</Info>
              <Divider>•</Divider>
              <Info>1678</Info>
            </InfoContainer>
            <Overview>
              &nbsp;&nbsp;John Bunyan wrote The Pilgrim's Progress when he was
              imporisoned in Bedfordshire for violating the
              <StyledAnchor href="https://en.wikipedia.org/wiki/Conventicle_Act_1664">
                {" "}
                Conventicle Act
              </StyledAnchor>
              . England during the 16th century was interconnected with advent
              of religious reformation through Luther and popularization of the
              sripture amongst layman. As a result, it became a long lasting
              literary classic to Christians to this day
              <StyledLink to="/cited"> (Brown) </StyledLink>.{<br />}
              {<br />}
              &nbsp;&nbsp;The Pilgrim's Progress guides reader from the city of
              destruction to the celestial city, following the journey of a
              "everyman character" Christian from a narrator perspective. Bunyan
              intentionally added footnotes in every corner of the book
              referring back to the Scripture. This allowed The Pilgrim's
              Progress to become second most popular book outside of the Bible.
              Allegories in the book helps people of faith to walk alongside
              with Christian in their footsteps towards the celestial city .
              {<br />}
              {<br />}
              &nbsp;&nbsp; According to Glenn Hinson, a church history professor
              indicates that John Bunayn was able to resolve crisis during his
              spiritual journey from the experiences from the Bedford
              congregation <StyledLink to="/cited"> (Hinson)</StyledLink>. His
              experience is allegorically portrayed in The Pilgrim's Progress as
              Christian meets the Comforter at the Interpreter's Hosue. These
              experience based similitude generates a guideline to all Chrisitan
              readers for journey of discipleship. And Bunyan's concerning
              footnotes from Scripture strengthens this experience.
            </Overview>
            <InfoContainer>
              <Info>Some Adaptations of The Pilgrim's Progress</Info>
            </InfoContainer>
            <AdaptationBox>
              <AdaptationLink href="https://www.amazon.com/Pilgrims-Progress-Illustrated-English-Illustrations-ebook/dp/B00Q8NFZY4/ref=sr_1_3?dchild=1&keywords=the+pilgrim%27s+progress+book&qid=1587972662&sr=8-3">
                <FA name="amazon" size="2x" />{" "}
                <AdaptationTitle>
                  Pilgrim's Progress: Illustrated Book
                </AdaptationTitle>
              </AdaptationLink>
              <AdaptationLink href="https://www.amazon.com/Pilgrims-Progress-Game-Tim-Dowley/dp/0825473594/ref=sr_1_1?dchild=1&keywords=the+pilgrim%27s+progress+board+game&qid=1587972606&sr=8-1">
                <FA name="amazon" size="2x" />{" "}
                <AdaptationTitle>
                  Pilgrim's Progress: The Game (Board Game)
                </AdaptationTitle>
              </AdaptationLink>
              <AdaptationLink href="https://www.youtube.com/watch?v=faeen3y7PV0">
                <FA name="youtube" size="2x" />{" "}
                <AdaptationTitle>
                  "The Pilgrim's Progress" | Full Feature Film (2017 Musical)
                </AdaptationTitle>
              </AdaptationLink>
              <AdaptationLink href="https://www.youtube.com/watch?v=k6POMRs0MBM">
                <FA name="youtube" size="2x" />{" "}
                <AdaptationTitle>Prologue: The Gathering Storm</AdaptationTitle>
              </AdaptationLink>
              <AdaptationLink href="https://www.youtube.com/watch?v=bjX2dukc_fk">
                <FA name="youtube" size="2x" />{" "}
                <AdaptationTitle>The Hard but Right Way</AdaptationTitle>
              </AdaptationLink>
            </AdaptationBox>
          </Data>
        </Content>
      </Container>
    );
  }
}
