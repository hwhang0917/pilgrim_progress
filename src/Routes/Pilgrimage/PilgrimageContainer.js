import React, { Component } from "react";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";

const Container = styled.div`
  user-select: none;
`;

const Title = styled.h3`
  font-family: "Girassol", cursive;
  font-size: 38px;
  margin-bottom: 15px;
  font-weight: 600;
  text-shadow: 2px 2px 8px black;
`;

const BibleVerse = styled.p`
  font-size: 20px;
  font-family: "Cedarville Cursive", cursive;
  text-shadow: 2px 2px 8px black;
`;

const Image = styled.img`
  max-width: 900px;
  height: 700px;
  filter: blur(2px);
`;

export default class extends Component {
  render() {
    return (
      <Container>
        <Carousel>
          <Carousel.Item className="text-center">
            <Image
              className="img-fluid"
              src="https://images.unsplash.com/photo-1570380749637-7e570824d2df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80"
              alt="City of Destruction"
            />
            <Carousel.Caption>
              <Title>City of Destruction</Title>
              <BibleVerse>"What shall we do?" (Acts 2:37)</BibleVerse>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="text-center">
            <Image
              className="img-fluid"
              src="https://images.unsplash.com/photo-1543777166-81504743e51e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              alt="Slough of Despond"
            />
            <Carousel.Caption>
              <Title>Slough of Despond</Title>
              <BibleVerse>
                "He lifted me out of the slimy pit, out of the mud and mire"
                (Psalms 40:2)
              </BibleVerse>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="text-center">
            <Image
              className="img-fluid"
              src="https://images.unsplash.com/photo-1570821805515-6a8ec8097274?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80"
              alt="Wicked Gate"
            />
            <Carousel.Caption>
              <Title>Wicked Gate</Title>
              <BibleVerse>
                "Ask and it will be given to you; seek and you will find; knock
                and the door will be opened to you." (Matthew 7:7)
              </BibleVerse>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="text-center">
            <Image
              className="img-fluid"
              src="https://images.unsplash.com/photo-1525091074452-87ed5709f708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              alt="Vanity Fair"
            />
            <Carousel.Caption>
              <Title>Vanity Fair</Title>
              <BibleVerse>
                "Everything was meaningless, a chasing after the wind; nothing
                was gained under the sun." (Ecclesiastes 2:11)
              </BibleVerse>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="text-center">
            <Image
              className="img-fluid"
              src="https://images.unsplash.com/photo-1556145559-4362991a61d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              alt="Celestial City"
            />
            <Carousel.Caption>
              <Title>Celestial City</Title>
              <BibleVerse>
                "As a bridegroom rejoices over his bride, so will your God
                rejoice over you." (Isaiah 62:5)
              </BibleVerse>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="text-center">
            <Image
              className="img-fluid"
              src="https://images.unsplash.com/photo-1536425746003-0572068a54f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              alt="Sun Shine"
            />
            <Carousel.Caption>
              <Title>
                Continue Your Fiath Journey with The Pilgrim's Progress ...
              </Title>
              <BibleVerse>
                "This Hill, though high, I covet to ascend, The difficulty will
                not me offend: For I perceive the way to life lies here; Come,
                pluck up, heart; lets neither faint nor fear: Better, though
                difficult, the right way to go, Than wrong, though easy, where
                the end is woe. " (Bunyan)
              </BibleVerse>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    );
  }
}
