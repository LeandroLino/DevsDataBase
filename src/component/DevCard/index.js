import styled from "styled-components";

const Container = styled.div`
  border-radius: 8px;

  width: 200px;
  height: 300px;

  background-color: rgba(249, 249, 249, 0.14);
  font-family: "Maven Pro", sans-serif;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
Container.Img = styled.img`
  margin-top: 20px;

  border: 3px solid #27ae60;

  width: 150px;
  height: 150px;
  border-radius: 50%;
`;
Container.Buttons = styled.div`
  > img {
    width: 20px;
    height: 20px;
    padding: 2.5px;

    cursor: pointer;
  }
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 20%;
`;

const NameStyle = { color: "#fff", fontWeight: "1000", fontSize: "20px" };
const RoleStyle = { color: "#fff", fontWeight: "1000", fontSize: "12px" };
Container.Texts = styled.div`
  ${(props) => (props.name ? NameStyle : RoleStyle)}
`;

export default Container;
