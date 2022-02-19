import styled from "styled-components";
const Bar = styled.div`
  font-family: "Maven Pro", sans-serif;

  width: 100vw;
  height: 10vh;

  display: flex;
  justify-content: space-around;
`;
Bar.Images = styled.div`
  height: 100%;

  display: flex;
  align-items: center;

  > img {
    padding: 5px;
    height: 30%;
    width: 30%;
  }
`;

Bar.Logo = styled(Bar.Images)`
  font-weight: 1000;
  color: #fff;

  width: 15%;
  > img {
    height: 40%;
    width: 40%;
  }
`;

Bar.Input = styled(Bar.Images)`
  margin-top: 25px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-end;

  width: 15%;
  > input {
    border: 0;
    border-radius: 5px;
    width: 100%;
    height: 40%;
    font-family: "Maven Pro", sans-serif;
    font-weight: 1000;
  }

  > input::placeholder {
    background: url("https://static.thenounproject.com/png/101791-200.png")
      no-repeat left;
    background-size: 10%;
    opacity: 0.5;
    padding-left: 10%;
    color: black;
  }
  > button {
    cursor: pointer;
    margin-top: 10px;

    background-color: #27ae60;
    border: 0;
    border-radius: 25px;

    height: 45%;
    width: 70%;
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

export default Bar;
