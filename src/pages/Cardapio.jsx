import styled from 'styled-components';
import { ProductCarousel } from '../components/ProductCarousel';

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: #d32f2f;
  margin-bottom: 2rem;
  text-align: center;
`;

export function Cardapio() {
  // Dados de exemplo - você pode substituir por uma API depois
  const pizzas = [
    {
      name: "Margherita",
      description: "Molho de tomate, mussarela e manjericão",
      price: 45.90,
      image: "https://img.freepik.com/fotos-gratis/pizza-margherita_140725-102.jpg"
    },
    {
      name: "Pepperoni",
      description: "Molho de tomate, mussarela e pepperoni",
      price: 52.90,
      image: "https://img.freepik.com/fotos-gratis/vista-frontal-da-pizza-de-pepperoni-com-pimenta_141793-2157.jpg"
    },
    {
      name: "Quatro Queijos",
      description: "Mussarela, provolone, parmesão e gorgonzola",
      price: 55.90,
      image: "https://img.freepik.com/fotos-gratis/pizza-quatro-queijos_140725-99.jpg"
    },
    {
      name: "Calabresa",
      description: "Molho de tomate, mussarela e calabresa",
      price: 48.90,
      image: "https://img.freepik.com/fotos-gratis/pizza-calabresa_140725-100.jpg"
    },
    {
      name: "Portuguesa",
      description: "Presunto, mussarela, ovo, cebola e azeitonas",
      price: 56.90,
      image: "https://img.freepik.com/fotos-gratis/pizza-portuguesa_140725-101.jpg"
    }
  ];

  const bebidas = [
    {
      name: "Coca-Cola",
      description: "Lata 350ml",
      price: 6.90,
      image: "https://img.freepik.com/fotos-gratis/vista-lateral-da-lata-de-refrigerante_23-2148695958.jpg"
    },
    {
      name: "Guaraná",
      description: "Lata 350ml",
      price: 5.90,
      image: "https://img.freepik.com/fotos-gratis/garrafa-de-refrigerante-de-guarana_140725-266.jpg"
    },
    {
      name: "Água Mineral",
      description: "Garrafa 500ml",
      price: 4.50,
      image: "https://img.freepik.com/fotos-gratis/garrafa-de-agua_140725-263.jpg"
    }
  ];

  const sobremesas = [
    {
      name: "Brownie",
      description: "Com sorvete de creme",
      price: 12.90,
      image: "https://img.freepik.com/fotos-gratis/delicioso-brownie-de-chocolate-com-nozes_23-2147740333.jpg"
    },
    {
      name: "Petit Gateau",
      description: "Com sorvete de baunilha",
      price: 18.90,
      image: "https://img.freepik.com/fotos-gratis/sobremesa-de-chocolate-com-sorvete_23-2147740329.jpg"
    }
  ];

  const adicionais = [
    {
      name: "Borda Recheada",
      description: "Borda de catupiry",
      price: 8.90,
      image: "https://img.freepik.com/fotos-gratis/fatia-de-pizza-com-borda-recheada_23-2147740355.jpg"
    },
    {
      name: "Molho Extra",
      description: "Molho de tomate",
      price: 3.50,
      image: "https://img.freepik.com/fotos-gratis/molho-de-tomate-em-um-prato-branco_23-2147740351.jpg"
    }
  ];

  return (
    <Container>
      <Title>Cardápio</Title>
      
      <ProductCarousel 
        title="Pizzas" 
        items={pizzas} 
      />
      
      <ProductCarousel 
        title="Bebidas" 
        items={bebidas} 
      />
      
      <ProductCarousel 
        title="Sobremesas" 
        items={sobremesas} 
      />
      
      <ProductCarousel 
        title="Adicionais" 
        items={adicionais} 
      />
    </Container>
  );
}