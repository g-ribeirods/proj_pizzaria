import styled from 'styled-components';
import { useCart } from '../context/CartContext';

const Container = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: #d32f2f;
  margin-bottom: 2rem;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  margin-bottom: 1rem;
`;

const TotalContainer = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: 8px;
  font-weight: bold;
  text-align: right;
`;

export function Carrinho() {
  const { cartItems, total } = useCart();

  return (
    <Container>
      <Title>Seu Carrinho</Title>
      
      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem key={item.name}>
              <div>
                <h3>{item.name}</h3>
                <p>Quantidade: {item.quantity}</p>
              </div>
              <div>
                <p>R$ {(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </CartItem>
          ))}
          
          <TotalContainer>
            <p>Total: R$ {total.toFixed(2)}</p>
          </TotalContainer>
        </>
      )}
    </Container>
  );
}