import Bar from ".";
import { useLocation } from "react-router-dom";
import Linkedin from "../../assets/Linkedin.svg";
import Discord from "../../assets/Discord.svg";
import Facebook from "../../assets/Facebook.svg";
import Logo from "../../assets/Logo.svg";
import Lupa from "../../assets/Lupa.svg";
import { useEffect, useState } from "react";

const Header = ({ setSearch, setAddDevs }) => {
  const location = useLocation();
  const [showButton, setButtonState] = useState(false);
  useEffect(() => {
    setButtonState(location.pathname == "/devs");
  }, [location]);
  /*const showSearch = () => {
  };*/
  return (
    <Bar>
      <Bar.Images>
        <img src={Linkedin} alt="Linkedin-Logo"></img>
        <img src={Facebook} alt="Facebook-Logo"></img>
        <img src={Discord} alt="Discord-Logo"></img>
      </Bar.Images>
      <Bar.Logo>
        <img src={Logo} alt="Ballerini-Logo"></img>
        Ballerini Devs
      </Bar.Logo>
      <Bar.Input>
        {showButton && (
          <>
            <input
              type="search"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar"
            />
            <button onClick={() => setAddDevs(true)}>
              Adicionar desenvolvedor
            </button>
          </>
        )}
      </Bar.Input>
    </Bar>
  );
};

export default Header;
