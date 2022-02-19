import Container from "./index";
import Underline from "../Underline/index.jsx";
import Button from "../Button/index.jsx";
import IconLinkedin from "../../assets/LinkedinDevs.svg";
import Github from "../../assets/Github.svg";
const DevCard = ({ search, name, role, avatar, linkedin, github }) => {
  return (
    <Container>
      <Container.Img src={avatar}></Container.Img>
      <Underline width="40%" marginLeft="0" marginBottom="5%" marginTop="7%" />
      <Container.Texts name="true">{name}</Container.Texts>
      <Container.Texts role="true">{role}</Container.Texts>
      <Container.Buttons>
        <img
          onClick={() => window.open(github)}
          src={Github}
          alt="LinkToGithub"
        ></img>
        <img
          onClick={() => window.open(linkedin)}
          src={IconLinkedin}
          alt="LinkToLinkedin"
        ></img>
        <Button
          style={{
            width: "50%",
            height: "50%",
            marginTop: "0",
            marginLeft: "10px",
          }}
        >
          Ver mais
        </Button>
      </Container.Buttons>
    </Container>
  );
};

export default DevCard;
