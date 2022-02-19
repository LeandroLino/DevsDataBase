import Card from "../DevCard/index.jsx";
import Container from ".";
import { useEffect, useState } from "react";
import AddDeveloper from "../AddDeveloper/index.jsx";
import Button from "../Button/index.jsx";
const Devs = ({ search, openAddDevs, setAddDevs }) => {
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(3);
  const [open, setOpenDrawer] = useState(false);
  const [devs, setDevs] = useState([]);
  const [developer, setDeveloper] = useState({});
  const [edit, setEdit] = useState(false);
  const [localStore, setStore] = useState(false);
  const [indexToEdit, setEditDeveloper] = useState(-1);
  const [showAlert, setShowAlert] = useState(false);

  const SetDrawer = (status, index) => {
    setOpenDrawer(status);
    setAddDevs(status);
    setEdit(status);

    if (index >= 0) {
      setEditDeveloper([...Array(to).keys()].splice(from, to)[index]);
    }
  };

  const removeDev = async (index, status) => {
    setEditDeveloper(index);
    setShowAlert(true);
    if (status) {
      const currentDevs = devs;
      const allIndexs = [...Array(to).keys()].splice(from, to);
      currentDevs.splice(allIndexs[index], 1);
      setDevs(currentDevs);
      localStorage.setItem("allDevs", JSON.stringify(devs) || []);
      setStore(!localStore);
      setShowAlert(false);
      return;
    }
  };

  const RemoveRange = () => {
    from - 3 < devs.length ? setFrom(0) : setFrom(from - 3);
    from - 3 < devs.length ? setTo(3) : setTo(to - 3);
  };
  const AddRange = () => {
    from + 3 >= devs.length
      ? devs.length - 3 < 0
        ? setFrom(0)
        : setFrom(devs.length - 3)
      : setFrom(from + 3);

    from + 3 >= devs.length
      ? devs.length <= 0
        ? setFrom(0)
        : setTo(devs.length)
      : setTo(to + 3);
  };

  useEffect(() => {
    setOpenDrawer(openAddDevs);
  }, [openAddDevs]);

  useEffect(() => {
    if (Object.keys(developer).length > 1) {
      if (indexToEdit >= 0) {
        const currentDevs = devs;
        currentDevs[indexToEdit] = developer;
        setDevs(currentDevs);
      } else {
        setDevs([...devs, developer]);
      }
    }
    setStore(!localStore);
  }, [developer]);

  useEffect(() => {
    if (devs.length <= 0) {
      setDevs(JSON.parse(localStorage.getItem("allDevs")));
    }
  }, [localStore]);

  useEffect(() => {
    localStorage.setItem("allDevs", JSON.stringify(devs) || []);
  }, [devs, localStore]);

  return (
    <Container>
      {/*Add Error */}

      <Container.Left onClick={() => RemoveRange()}></Container.Left>
      {devs.slice(from, to).map((value, index) =>
        value.name.toLowerCase().startsWith(search.toLowerCase()) ||
        value.role.toLowerCase().startsWith(search.toLowerCase()) ? (
          <Container.Card key={index}>
            <Card
              name={value.name}
              role={value.role}
              avatar={value.avatar}
              linkedin={value.linkedin}
              github={value.github}
            />
            <div>
              <Button
                onClick={() => SetDrawer(true, index)}
                style={{
                  backgroundColor: "#dbb801",
                  color: "#000",
                }}
              >
                Editar
              </Button>
              <Button
                classComponent="RedButton"
                onClick={() => {
                  removeDev(index, false);
                }}
                style={{
                  color: "black",
                }}
              >
                Deleter
              </Button>
            </div>
          </Container.Card>
        ) : null
      )}
      <Container.Right onClick={() => AddRange()}></Container.Right>
      {showAlert && (
        <Container.Confirm>
          <div>
            <div>Deletar Desenvolvedor</div>
            <div>Tem certeza que deseja deletar este desenvolvedor?</div>
            <div>
              <Button
                onClick={() => {
                  setShowAlert(false);
                }}
                classComponent="WhiteButton"
                style={{ color: "#000" }}
              >
                Cancelar
              </Button>
              <Button
                onClick={() => {
                  removeDev(indexToEdit, true);
                }}
                classComponent="RedButton"
                style={{ color: "#000" }}
              >
                Deletar
              </Button>
            </div>
          </div>
        </Container.Confirm>
      )}
      {open && (
        <AddDeveloper
          close={() => SetDrawer(false)}
          AddDeveloperState={setDeveloper}
          developer={edit ? indexToEdit : -1}
        />
      )}
    </Container>
  );
};

export default Devs;
