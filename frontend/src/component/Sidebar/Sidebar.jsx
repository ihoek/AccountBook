import { useState } from "react";
import {
  SidebarContainer,
  Logo,
  MenuList,
  MenuItem,
  MenuButton,
  Footer,
} from "./SidebarStyled";
import {
  HomeIcon,
  CalculatorIcon,
  CardIcon,
  SettingsIcon,
} from "../../Utils/svgfiles";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState("메인화면");

  const menuItems = [
    {
      name: "메인화면",
      icon: <HomeIcon />,
    },
    {
      name: "정산",
      icon: <CalculatorIcon />,
    },
    {
      name: "카드",
      icon: <CardIcon />,
    },
    {
      name: "설정",
      icon: <SettingsIcon />,
    },
  ];

  return (
    <SidebarContainer>
      <MenuList>
        {menuItems.map((item) => (
          <MenuItem key={item.name}>
            <MenuButton
              $active={activeMenu === item.name}
              onClick={() => setActiveMenu(item.name)}
            >
              {item.icon}
              <span>{item.name}</span>
            </MenuButton>
          </MenuItem>
        ))}
      </MenuList>
      <Footer>AccountBook v1.0</Footer>
    </SidebarContainer>
  );
};

export default Sidebar;
