import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./component/Header/index.jsx";
import Container from "./component/Container/index.jsx";
import Home from "./component/Home/index.jsx";
import Devs from "./component/Devs/index.jsx";
import { useEffect, useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [openAddDevs, setAddDevs] = useState(false);

  return (
    <Container>
      <Router>
        <Header setSearch={setSearch} setAddDevs={setAddDevs} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/devs"
            element={
              <Devs
                search={search}
                openAddDevs={openAddDevs}
                setAddDevs={setAddDevs}
              />
            }
          />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
