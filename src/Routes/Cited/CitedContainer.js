import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  padding: 30px;
  font-family: "Times New Roman", Times, serif;
`;

const BackdropCover = styled.div`
  position: absolute;
  top: -20px;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  z-index: -9;
`;

const Backdrop = styled.div`
  position: absolute;
  top: -20px;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right center;
  opacity: 0.8;
  z-index: -10;
  animation: fadeBackdrop 3s ease-in-out forwards;
  @keyframes fadeBackdrop {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Title = styled.h1`
  font-size: 40px;
  padding: 30px 0px;
`;

const MiniTitle = styled.h2`
  font-size: 30px;
  padding: 30px 0px;
`;

const CitationContainer = styled.div`
  z-index: 10;
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

const Citation = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const AuthorName = styled.span`
  margin: 0px 5px;
`;

const SourceName = styled.span`
  margin: 0px 5px;
  font-style: italic;
`;

const SourceDesc = styled.span`
  margin: 0px 5px;
`;

const StyledAnchor = styled.a`
  color: #3498db;
  text-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
  transition-duration: 0.2s;
  &:hover {
    color: #2ecc71;
  }
`;

const SourceDate = styled.span`
  margin: 0px 5px;
`;

export default class extends Component {
  render() {
    return (
      <Container>
        <BackdropCover />
        <Backdrop
          bgImage={`https://images.unsplash.com/photo-1570821805515-6a8ec8097274?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80`}
        />
        <CitationContainer>
          <Title>Works Cited</Title>
          <MiniTitle>Books, Scholarly Articles</MiniTitle>
          <Citation>
            <AuthorName>Brown, John </AuthorName>
            <SourceName>John Bunyan: His Life, Times and Work</SourceName>
            <SourceDate>(1885)</SourceDate>
          </Citation>
          <Citation>
            <AuthorName>Bunyan, John </AuthorName>
            <SourceName>The Pilgrim's Progress</SourceName>
            <SourceDesc>Edited by C.J. Lovik, Poiema print.</SourceDesc>
            <SourceDate>(1678)</SourceDate>
          </Citation>
          <Citation>
            <AuthorName>Hinson, Glenn </AuthorName>
            <SourceName>Baptist History and Heritage </SourceName>
            <SourceDesc>John Bunyan as a spiritual guide.</SourceDesc>
            <SourceDate>(2015)</SourceDate>
          </Citation>
          <MiniTitle>Images</MiniTitle>
          <Citation>
            <AuthorName>Lee, Suhyun </AuthorName>
            <SourceName>dark city</SourceName>
            <SourceDesc>
              Free City Image from{" "}
              <StyledAnchor href="https://unsplash.com/photos/OOx7MLYjX98/info">
                Unsplash
              </StyledAnchor>
            </SourceDesc>
            <SourceDate>(October 7, 2019)</SourceDate>
          </Citation>
          <Citation>
            <AuthorName>Piatek, Krystian </AuthorName>
            <SourceName>
              body of water surrounded with trees during daytime
            </SourceName>
            <SourceDesc>
              Free Land Image from{" "}
              <StyledAnchor href="https://unsplash.com/photos/JUqXOPOYXEg/info">
                Unsplash
              </StyledAnchor>
            </SourceDesc>
            <SourceDate>(December 3, 2018)</SourceDate>
          </Citation>
          <Citation>
            <AuthorName>Szumotalski, Kamil </AuthorName>
            <SourceName>man standing beside building door photo</SourceName>
            <SourceDesc>
              Free Human Image from{" "}
              <StyledAnchor href="https://unsplash.com/photos/6Iv8LHv2ksU/info">
                Unsplash
              </StyledAnchor>
            </SourceDesc>
            <SourceDate>(October 12, 2019)</SourceDate>
          </Citation>
          <Citation>
            <AuthorName>Tyson, John </AuthorName>
            <SourceName>
              Person in black shirt walking on dirt road between fields
            </SourceName>
            <SourceDesc>
              Free Human Image from{" "}
              <StyledAnchor href="https://unsplash.com/photos/CNlTkkIxpEA/info">
                Unsplash
              </StyledAnchor>
            </SourceDesc>
            <SourceDate>(June 16, 2019)</SourceDate>
          </Citation>
          <Citation>
            <AuthorName>V, Léa </AuthorName>
            <SourceName>white cathedral photo</SourceName>
            <SourceDesc>
              Free Building Image from{" "}
              <StyledAnchor href="https://unsplash.com/photos/z2IED5kTd-8/info">
                Unsplash
              </StyledAnchor>
            </SourceDesc>
            <SourceDate>(April 25, 2019)</SourceDate>
          </Citation>
          <Citation>
            <AuthorName>Van den Wouwer, Jannes </AuthorName>
            <SourceName>
              girl standing outside building with LED lights and graphic wall
            </SourceName>
            <SourceDesc>
              Free Human Image from{" "}
              <StyledAnchor href="https://unsplash.com/photos/ToTurJAsAh0/info">
                Unsplash
              </StyledAnchor>
            </SourceDesc>
            <SourceDate>(April 30, 2018)</SourceDate>
          </Citation>
        </CitationContainer>
      </Container>
    );
  }
}
