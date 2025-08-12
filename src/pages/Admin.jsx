import styled from 'styled-components';

const Content = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  color: #d32f2f;
  margin-bottom: 2rem;
`;

export function Admin() {
  return (
    <Content>
      <Title>Painel Administrativo</Title>
      <p>Área restrita para administradores</p>
    </Content>
  );
}