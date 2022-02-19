import styled from "styled-components";

const Container = styled.div`
  font-family: "Maven Pro", sans-serif;
  color: #fff;

  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100vw;
  height: 104vh;

  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    > div:first-child {
      font-weight: 1000;
      font-size: 1.3em;
    }
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;

    height: 25%;
    background-color: #454545;
    border-radius: 5px;
    > div {
      width: 60%;
      text-align: center;
    }
    > div:last-child {
      > button {
        width: 35%;
        height: 3em;
      }
      width: 100%;
      display: flex;
      justify-content: space-around;
    }
  }
`;
export default Container;
