import styled from 'styled-components';

const Content = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  color: #d32f2f;
  margin-bottom: 2rem;
`;

export function Cozinha() {
  return (
    <Content>
      <Title>Cozinha</Title>
      <p>Controle dos pedidos em preparação.</p>
    </Content>
  );
}