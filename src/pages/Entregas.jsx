import styled from 'styled-components';

const Content = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  color: #d32f2f;
  margin-bottom: 2rem;
`;

export function Entregas() {
  return (
    <Content>
      <Title>Entregas</Title>
      <p>Controle das entregas em andamento.</p>
    </Content>
  );
}