import { useMenu } from "../../context/MenuContext";
import Home from "../Home/Home";
import Calculate from "../Calculate/Calculate";
import Card from "../Card/Card";
import Settings from "../Settings/Settings";
import Planner from "../Planner/Planner";

const Main = () => {
  const { activeMenuId } = useMenu();

  const renderContent = () => {
    switch (activeMenuId) {
      case "home":
        return <Home />;
      case "planner":
        return <Planner />;
      case "calculator":
        return <Calculate />;
      case "card":
        return <Card />;
      case "settings":
        return <Settings />;
      default:
        return <Home />;
    }
  };

  return <>{renderContent()}</>;
};

export default Main;
