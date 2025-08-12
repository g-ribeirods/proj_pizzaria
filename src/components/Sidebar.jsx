import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const SidebarContainer = styled.div`
  width: 250px;
  background-color: #d32f2f;
  color: white;
  height: 100vh;
  position: fixed;
  padding: 1rem;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  text-align: center;
  padding: 1rem 0;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
`;

const MenuItem = styled.li`
  margin-bottom: 0.5rem;
`;

const MenuLink = styled(NavLink)`
  display: block;
  padding: 0.75rem 1rem;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &.active {
    background-color: rgba(255, 255, 255, 0.2);
    font-weight: bold;
  }
`;

export function Sidebar() {
  return (
    <SidebarContainer>
      <Logo>Pizzaria Admin</Logo>
      <MenuList>
        <MenuItem>
          <MenuLink to="/cardapio">Cardápio</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/carrinho">Carrinho</MenuLink> {/* Novo link */}
        </MenuItem>
        <MenuItem>
          <MenuLink to="/cozinha">Cozinha</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/entregas">Entregas</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/admin">Administrador</MenuLink>
        </MenuItem>
      </MenuList>
    </SidebarContainer>
  );
}