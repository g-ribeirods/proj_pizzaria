import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
    
const Title = styled.h1`
  color: #333;
  margin-bottom: 2rem;
`;

export function Cozinha() {
  return (
    <PageContainer>
      <Title>Cozinha</Title>
      <p>Controle dos pedidos em preparação.</p>
    </PageContainer>
  );
}