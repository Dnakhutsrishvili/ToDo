import { useState } from "react";
import "./App.css";

import Wrapper from "./Components/Wrapper";

function App() {
  const [mode, setMode] = useState(true);

  return (
    <div
      className={mode ? "light font-face-gm" : "dark font-face-gm"}
      style={
        !mode
          ? {
              position: "absolute",
              background: "#f2f2f2",
              height: "100%",
              width: "100%",
            }
          : {
              position: "absolute",
              background: " #171823",
              height: "100%",
              width: "100%",
            }
      }
    >
      <Wrapper mode={mode} setMode={setMode}></Wrapper>
    </div>
  );
}

export default App;
