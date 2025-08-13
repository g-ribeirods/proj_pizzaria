// src/context/PedidosContext.jsx
import { createContext, useState, useContext } from "react";

const PedidosContext = createContext();

export function PedidosProvider({ children }) {
  const [pedidosPreparacao, setPedidosPreparacao] = useState([]);
  const [pedidosEntrega, setPedidosEntrega] = useState([]);

  const adicionarPedido = (pedido) => {
    // Adiciona campos de status
    const novoPedido = {
      ...pedido,
      entregue: false,
      servido: false,
    };
    setPedidosPreparacao((prev) => [...prev, novoPedido]);
  };

  const marcarPedidoPronto = (index) => {
    const pedidoPronto = pedidosPreparacao[index];
    setPedidosPreparacao((prev) => prev.filter((_, i) => i !== index));
    setPedidosEntrega((prev) => [...prev, pedidoPronto]);
  };

  const marcarComoEntregueOuServido = (index) => {
    setPedidosEntrega((prev) =>
      prev.map((pedido, i) =>
        i === index ? { ...pedido, entregueOuServido: true } : pedido
      )
    );
  };

  return (
    <PedidosContext.Provider
      value={{
        pedidosPreparacao,
        pedidosEntrega,
        adicionarPedido,
        marcarPedidoPronto,
        marcarComoEntregueOuServido,
      }}
    >
      {children}
    </PedidosContext.Provider>
  );
}

export function usePedidos() {
  return useContext(PedidosContext);
}
