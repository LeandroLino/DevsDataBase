import styled from "styled-components";

const Container = styled.div`
  color: #d2d2d2;
  font-family: "Maven Pro", sans-serif;
`;

Container.Blob = styled.div`
  > img {
    z-index: 0;
    position: absolute;
    overflow: hidden;
    height: 90vh;
  }

  width: 40%;
`;

Container.Programmer = styled.div`
  > img {
    z-index: 0;
    right: 12%;
    position: absolute;
    height: 80vh;
  }
  @media (max-width: 1000px) {
    > img {
      z-index: 1;
      right: 0;
      position: absolute;
      height: 55vh;
    }
  }
  @media (max-width: 1500px) and (min-width: 1000px) {
    > img {
      z-index: 1;
      right: 0;
      position: absolute;
      height: 70vh;
    }
  }
  @media (max-width: 600px) {
    > img {
      display: none;
      visibility: hidden;
    }
  }

  width: 40%;
`;

Container.Title = styled.div`
  @media (max-width: 600px) {
    width: 80%;
  }

  z-index: 1;
  position: absolute;

  font-weight: 400;
  font-family: "Overpass", sans-serif;

  padding: 8% 0 0 8%;

  width: 40%;
  height: 70px;
  font-size: 24px;

  > div:first-child {
    font-weight: bold;
    font-size: 48px;
  }
  > button {
    cursor: pointer;

    margin-top: 10%;

    border-radius: 25px;
    border: 0;
    border-bottom: 1px solid black;

    background-color: #27ae60;

    height: 70%;
    width: 50%;
    color: #fff;
    font-size: 0.7em;
    font-family: "Maven Pro", sans-serif;
    font-weight: 1000;
    :hover {
      background-color: #7ac499;
    }
    transition: background-color 0.1s;
  }
`;

export default Container;
