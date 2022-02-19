import { ButtonComponent } from "../Button";
import Container from ".";
import { useEffect, useState } from "react";
const Alert = ({ setCanDelete, close }) => {
  const [canDelete, setDelete] = useState(false);

  const funcDelete = (status) => {
    setDelete(status);
    return;
  };

  useEffect(() => {
    setCanDelete(canDelete);
  }, [canDelete]);
  return (
    <Container>
      <div>
        <div>Deletar Desenvolvedor</div>
        <div>Tem certeza que deseja deletar este desenvolvedor?</div>
        <div>
          <ButtonComponent
            onClick={async () => {
              await funcDelete(false);
              close(false);
            }}
            classComponent="WhiteButton"
            style={{ color: "#000" }}
          >
            Cancelar
          </ButtonComponent>
          <ButtonComponent
            onClick={async () => {
              await funcDelete(true);
              close(false);
            }}
            classComponent="RedButton"
            style={{ color: "#000" }}
          >
            Deletar
          </ButtonComponent>
        </div>
      </div>
    </Container>
  );
};

export default Alert;
