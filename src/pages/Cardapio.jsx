import styled from 'styled-components';
import { ProductCarousel } from '../components/ProductCarousel';

const Content = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  color: #d32f2f;
  margin-bottom: 2rem;
  text-align: center;
`;

export function Cardapio() {
  
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
    },
    {
      name: "Atum",
      description: "Atum, mussarela, ovo, cebola e azeitonas",
      price: 56.90,
      image: "https://img.freepik.com/fotos-gratis/pizza-portuguesa_140725-101.jpg"
    },
    {
      name: "Milho Verde",
      description: "Milho, mussarela, ovo, cebola e azeitonas",
      price: 56.90,
      image: "https://img.freepik.com/fotos-gratis/pizza-portuguesa_140725-101.jpg"
    },
    {
      name: "À moda da casa",
      description: "Milho, mussarela, ovo, cebola e azeitonas",
      price: 56.90,
      image: "https://img.freepik.com/fotos-gratis/pizza-portuguesa_140725-101.jpg"
    },
    {
      name: "Mista",
      description: "Milho, mussarela, ovo, cebola e azeitonas",
      price: 56.90,
      image: "https://img.freepik.com/fotos-gratis/pizza-portuguesa_140725-101.jpg"
    },
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
    },
    {
      name: "Suco de Laranja",
      description: "Garrafa 500ml",
      price: 4.50,
      image: "https://img.freepik.com/fotos-gratis/garrafa-de-agua_140725-263.jpg"
    },
    {
      name: "Suco de Uva",
      description: "Garrafa 500ml",
      price: 4.50,
      image: "https://img.freepik.com/fotos-gratis/garrafa-de-agua_140725-263.jpg"
    },
    {
      name: "Suco de Cupuaçu",
      description: "Garrafa 500ml",
      price: 4.50,
      image: "https://img.freepik.com/fotos-gratis/garrafa-de-agua_140725-263.jpg"
    },
    {
      name: "Suco de Maracujá",
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
    },
    {
      name: "Cheesecake",
      description: "Cheesecake",
      price: 18.90,
      image: "https://img.freepik.com/fotos-gratis/sobremesa-de-chocolate-com-sorvete_23-2147740329.jpg"
    },
    {
      name: "Torta Mousse de Chocolate",
      description: "Cheesecake",
      price: 18.90,
      image: "https://img.freepik.com/fotos-gratis/sobremesa-de-chocolate-com-sorvete_23-2147740329.jpg"
    },
    {
      name: "Churros Recheado",
      description: "Churros Recheados",
      price: 18.90,
      image: "https://img.freepik.com/fotos-gratis/sobremesa-de-chocolate-com-sorvete_23-2147740329.jpg"
    },
    {
      name: "Cookie Recheado",
      description: "Churros Recheados",
      price: 18.90,
      image: "https://img.freepik.com/fotos-gratis/sobremesa-de-chocolate-com-sorvete_23-2147740329.jpg"
    },
  ];

  const adicionais = [
    {
      name: "Borda de Catupiry",
      description: "Borda de catupiry",
      price: 8.90,
      image: "https://img.freepik.com/fotos-gratis/fatia-de-pizza-com-borda-recheada_23-2147740355.jpg"
    },
    {
      name: "Molho Extra",
      description: "Molho de tomate",
      price: 3.50,
      image: "https://img.freepik.com/fotos-gratis/molho-de-tomate-em-um-prato-branco_23-2147740351.jpg"
    },
    {
      name: "Borda de Chocolate",
      description: "Borda de Chocolate",
      price: 3.50,
      image: "https://img.freepik.com/fotos-gratis/molho-de-tomate-em-um-prato-branco_23-2147740351.jpg"
    },
    {
      name: "Borda de 4 Queijos",
      description: "Borda de 4 Queijos",
      price: 3.50,
      image: "https://img.freepik.com/fotos-gratis/molho-de-tomate-em-um-prato-branco_23-2147740351.jpg"
    },
    {
      name: "Borda Doce de Leite",
      description: "Borda Doce de Leite",
      price: 3.50,
      image: "https://img.freepik.com/fotos-gratis/molho-de-tomate-em-um-prato-branco_23-2147740351.jpg"
    },
    {
      name: "Borda Bacon com Catupiry",
      description: "Borda Bacon com Catupiry",
      price: 3.50,
      image: "https://img.freepik.com/fotos-gratis/molho-de-tomate-em-um-prato-branco_23-2147740351.jpg"
    },
    {
      name: "Borda Cream Cheese",
      description: "Borda Cream Cheese",
      price: 3.50,
      image: "https://img.freepik.com/fotos-gratis/molho-de-tomate-em-um-prato-branco_23-2147740351.jpg"
    },
  ];

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