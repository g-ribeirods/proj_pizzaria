import styled from 'styled-components';
import { Sidebar } from './Sidebar';
import { Outlet } from 'react-router-dom';

const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  margin-left: 250px; // Largura do sidebar
  padding: 2rem;
  background-color: #f9f9f9;
`;

export function AdminLayout() {
  return (
    <LayoutContainer>
      <Sidebar />
      <MainContent>
        <Outlet />
      </MainContent>
    </LayoutContainer>
  );
}