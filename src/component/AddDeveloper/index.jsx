import { useEffect, useState } from "react";
import Container from ".";
import Button from "../Button/index.jsx";
const AddDeveloper = ({ close, AddDeveloperState, developer }) => {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [role, setRole] = useState("");
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [dev, setDev] = useState({});

  const addDeveloperFunc = () => {
    setDev({
      name,
      avatar,
      role,
      github,
      linkedin,
    });
  };

  useEffect(() => {
    AddDeveloperState(dev);
    if (Object.keys(dev).length > 1) {
      close();
    }
  }, [dev]);
  useEffect(() => {
    if (developer >= 0) {
      const devs = JSON.parse(localStorage.getItem("allDevs"));
      const currentDev = devs[developer];
      setName(currentDev.name);
      setAvatar(currentDev.avatar);
      setRole(currentDev.role);
      setGithub(currentDev.github);
      setLinkedin(currentDev.linkedin);
    }
  }, [developer]);

  return (
    <Container>
      <div onClick={() => close()}></div>
      <Container.SubContainer>
        <div>Adicionar Desenvolvedor</div>
        <div>
          <div>Nome:</div>
          <input value={name} onChange={(e) => setName(e.target.value)}></input>
        </div>
        <div>
          <div>Avatar:</div>
          <input
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
          ></input>
        </div>
        <div>
          <div>Cargo:</div>
          <input value={role} onChange={(e) => setRole(e.target.value)}></input>
        </div>
        <div>
          <div>Github:</div>
          <input
            value={github}
            onChange={(e) => setGithub(e.target.value)}
          ></input>
        </div>
        <div>
          <div>Linkedin:</div>
          <input
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
          ></input>
        </div>
        <Container.Buttons>
          <Button
            classComponent="WhiteButton"
            style={{
              width: "10vw",
              height: "5vh",
              marginTop: "0",
              marginLeft: "10px",
              color: "#000",
              fontSize: "0.8em",
            }}
            children="Cancelar"
            onClick={() => close()}
          />
          <Button
            style={{
              width: "10vw",
              height: "5vh",
              marginTop: "0",
              marginLeft: "10px",
              fontSize: "0.8em",
            }}
            children="Adicionar"
            onClick={() => addDeveloperFunc()}
          />
        </Container.Buttons>
      </Container.SubContainer>
    </Container>
  );
};

export default AddDeveloper;
