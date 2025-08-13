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
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  margin-bottom: 1rem;
`;

const ItemInfo = styled.div`
  flex: 1;
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0.5rem 0;
`;

const ControlButton = styled.button`
  background-color: #d32f2f;
  color: white;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;

  &:hover {
    background-color: #b71c1c;
  }
`;

const RemoveButton = styled.button`
  background-color: transparent;
  color: #d32f2f;
  border: 1px solid #d32f2f;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 1rem;
  font-size: 0.8rem;

  &:hover {
    background-color: #ffebee;
  }
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
  const { cartItems, total, increaseQuantity, decreaseQuantity, removeItem } = useCart();

  return (
    <Container>
      <Title>Seu Carrinho</Title>
      
      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem key={item.name}>
              <ItemInfo>
                <h3>{item.name}</h3>
                <QuantityControls>
                  <ControlButton onClick={() => decreaseQuantity(item.name)}>-</ControlButton>
                  <span>{item.quantity}</span>
                  <ControlButton onClick={() => increaseQuantity(item.name)}>+</ControlButton>
                </QuantityControls>
                <p>R$ {(item.price * item.quantity).toFixed(2)}</p>
              </ItemInfo>
              <RemoveButton onClick={() => removeItem(item.name)}>
                Remover
              </RemoveButton>
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