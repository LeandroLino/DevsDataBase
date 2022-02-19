import Container from "./index";
import BlobSmall from "../../assets/Blobs-small.svg";
import Programmer from "../../assets/Programmer.svg";
import { useNavigate } from "react-router-dom";
import Underline from "../Underline/index.jsx";

const Home = () => {
  let navigate = useNavigate();
  return (
    <Container>
      <Container.Blob>
        <img src={BlobSmall} alt="Details"></img>
      </Container.Blob>
      <Container.Title>
        <div>O maior banco de devs do Brasil</div>
        <div>
          Nao importa se front ou back end, fazer networking e muito importante.
          Faça parte da maior comunidade de desenvolvedores brasileiros.
        </div>
        <button onClick={() => navigate("/devs")}>Entre Agora</button>
        <Underline />
      </Container.Title>
      <Container.Programmer>
        <img src={Programmer} alt="Programmer"></img>
      </Container.Programmer>
    </Container>
  );
};

export default Home;
