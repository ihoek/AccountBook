import Sidebar from "./component/Sidebar/Sidebar";
import Main from "./component/Main/Main";
import "./App.css";

function App() {
  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
