import Sidebar from "./component/Sidebar/Sidebar";
import Main from "./component/Main/Main";
import { MenuProvider } from "./context/MenuContext";
import "./App.css";

function App() {
  return (
    <MenuProvider>
      <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
        <Sidebar />
        <Main />
      </div>
    </MenuProvider>
  );
}

export default App;
