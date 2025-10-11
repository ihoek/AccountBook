import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 240px;
  height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  flex-direction: column;
  padding: 32px 0;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.div`
  padding: 0 24px 32px 24px;
  font-size: 24px;
  font-weight: bold;
  color: white;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 32px;
`;

export const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1;
`;

export const MenuItem = styled.li`
  margin: 8px 16px;
  transition: all 0.3s ease;
`;

export const MenuButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 24px;
  background: ${(props) =>
    props.$active ? "rgba(255, 255, 255, 0.2)" : "transparent"};
  border: none;
  border-radius: 12px;
  color: white;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateX(5px);
  }

  &:active {
    transform: translateX(3px);
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const Footer = styled.div`
  padding: 16px 24px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`;
