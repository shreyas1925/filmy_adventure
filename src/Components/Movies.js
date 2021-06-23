import React from "react";
import styled from "styled-components";
import { selectRecommend } from "../features/movie/movieSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const Movies = () => {
  const movies = useSelector(selectRecommend);

  // console.log("YOOOO movie", movies);

  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        <Fade></Fade>
        {movies &&
          movies.map((movie) => (
            <Wrap key={movie.id}>
              <Link to={`/detail/${movie.id}`}>
                <img src={movie.cardImg} />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
};

export default Movies;

const Container = styled.div`
  margin-bottom: 30px;
  h4 {
    margin-top: 20px;
    margin-bottom: 25px;
  }
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0px 26px 30px -10px,
      rgb(0 0 0 / 70%) 0px 16px 10px -10px;
  }
`;
