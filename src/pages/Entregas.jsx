import styled from 'styled-components';
import { usePedidos } from '../context/PedidosContext';

const Content = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  color: #d32f2f;
  margin-bottom: 2rem;
`;

const PedidoCard = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
  background: #f8f8f8;
  border-radius: 6px;
`;

export function Entregas() {
  const { pedidosEntrega } = usePedidos();

  return (
    <Content>
      <Title>Entregas</Title>

      {pedidosEntrega.length === 0 ? (
        <p>Nenhuma entrega em andamento</p>
      ) : (
        pedidosEntrega.map((pedido, index) => (
          <PedidoCard key={index}>
            <p><strong>Data:</strong> {pedido.data}</p>
            {pedido.itens.map((item, i) => (
              <p key={i}>{item.quantity}x {item.name}</p>
            ))}
          </PedidoCard>
        ))
      )}
    </Content>
  );
}