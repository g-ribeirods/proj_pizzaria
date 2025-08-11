import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: #333;
  margin-bottom: 2rem;
`;

export function Entregas() {
  return (
    <PageContainer>
      <Title>Entregas</Title>
      <p>Controle das entregas em andamento.</p>
    </PageContainer>
  );
}