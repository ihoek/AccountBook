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
import { useMenu } from "../../context/MenuContext";

const Sidebar = () => {
  const { activeMenuName, setActiveMenu } = useMenu();

  const menuItems = [
    {
      id: "home",
      name: "메인화면",
      icon: <HomeIcon />,
    },
    {
      id: "planner",
      name: "계획표",
      icon: <CalculatorIcon />,
    },
    {
      id: "calculator",
      name: "정산",
      icon: <CalculatorIcon />,
    },
    {
      id: "card",
      name: "카드",
      icon: <CardIcon />,
    },
    {
      id: "settings",
      name: "설정",
      icon: <SettingsIcon />,
    },
  ];

  // 메뉴 클릭 핸들러
  const handleMenuClick = (id, name) => {
    setActiveMenu(id, name);
  };

  return (
    <SidebarContainer>
      <MenuList>
        {menuItems.map((item) => (
          <MenuItem key={item.name}>
            <MenuButton
              $active={activeMenuName === item.name}
              onClick={() => handleMenuClick(item.id, item.name)}
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
