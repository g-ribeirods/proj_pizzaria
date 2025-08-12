import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: #d32f2f;
  margin-bottom: 2rem;
`;

export function Admin() {
  return (
    <Container>
      <Title>Painel Administrativo</Title>
      <p>Área restrita para administradores</p>
      {/* Adicionar os controles administrativos depois */}
    </Container>
  );
}