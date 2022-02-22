import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import db from "../firebase";

const Detail = () => {
  const { id } = useParams();
  console.log(id);
  const [movie, setMovie] = useState("");
  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setMovie(doc.data());
        } else {
        }
      });
  }, []);
  console.log(movie);

  return (
    <Container>
      {movie && (
        <>
          <Background>
            <img src={movie.backgroundImg} />
          </Background>
          <ImageTitle>
            <img src={movie.titleImg} />
          </ImageTitle>
          <ControlsContainer>
            <PlayButton>
              <img src="/images/play-icon-black.png" alt="" srcset="" />
              <span>PLAY</span>
            </PlayButton>

            <TrailerButton>
              <img src="/images/play-icon-white.png" alt="" srcset="" />
              <span>Trailer</span>
            </TrailerButton>

            <AddButton>
              <span>+</span>
            </AddButton>

            <MatchGroupingButton>
              <img src="/images/group-icon.png" alt="" srcset="" />
            </MatchGroupingButton>
          </ControlsContainer>

          <SubTitle>{movie.subTitle}</SubTitle>
          <Description>{movie.description}</Description>
        </>
      )}
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  min-height: calc(100vh-70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 31vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;
  margin-top: 60px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding: 0px 24px;
  margin-right: 25px;
  display: flex;
  align-items: center;
  height: 56px;
  border: none;
  background: rgb(249, 249, 249);
  letter-spacing: 1.9px;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 3px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`;

const AddButton = styled.button`
  width: 44px;
  height: 44px;
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background: rgba(0, 0, 0, 0.6);
  cursor: pointer;

  span {
    font-size: 31px;
    color: white;
  }
`;

const MatchGroupingButton = styled(AddButton)`
  background: rgb(0, 0, 0);
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 14px;
  min-height: 20px;
  margin-top: 27px;
`;

const Description = styled.div`
  color: rgb(249, 249, 249);
  line-height: 1.4;
  font-size: 20px;
  margin-top: 17px;
  max-width: 560px;
`;
