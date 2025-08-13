// src/context/PedidosContext.jsx
import { createContext, useState, useContext } from "react";

const PedidosContext = createContext();

export function PedidosProvider({ children }) {
  const [pedidosPreparacao, setPedidosPreparacao] = useState([]);
  const [pedidosEntrega, setPedidosEntrega] = useState([]);

  const adicionarPedido = (pedido) => {
    setPedidosPreparacao((prev) => [...prev, pedido]);
  };

  const marcarPedidoPronto = (index) => {
    const pedidoPronto = pedidosPreparacao[index];
    setPedidosPreparacao((prev) => prev.filter((_, i) => i !== index));
    setPedidosEntrega((prev) => [...prev, pedidoPronto]);
  };

  return (
    <PedidosContext.Provider
      value={{
        pedidosPreparacao,
        pedidosEntrega,
        adicionarPedido,
        marcarPedidoPronto,
      }}
    >
      {children}
    </PedidosContext.Provider>
  );
}

export function usePedidos() {
  return useContext(PedidosContext);
}
