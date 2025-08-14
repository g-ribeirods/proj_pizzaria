import styled from 'styled-components';
import { ProductCarousel } from '../components/ProductCarousel';
import cardapioData from '../data/cardapio.json'; // Ajuste o caminho conforme sua estrutura

const Content = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  color: #d32f2f;
  margin-bottom: 2rem;
  text-align: center;
`;

export function Cardapio() {
  const { pizzas, bebidas, sobremesas, adicionais } = cardapioData;

  return (
    <Content>
      <Title>Cardápio</Title>
      <ProductCarousel title="Pizzas" items={pizzas} />
      <ProductCarousel title="Bebidas" items={bebidas} />
      <ProductCarousel title="Sobremesas" items={sobremesas} />
      <ProductCarousel title="Adicionais" items={adicionais} />
    </Content>
  );
}