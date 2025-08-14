import { createContext, useState, useEffect } from 'react';
import cardapioData from '../data/cardapio.json';

export const MenuContext = createContext();

export function MenuProvider({ children }) {
  // 1. Estado inicial carregando os dados do JSON
  const [cardapio, setCardapio] = useState(cardapioData);

  // 2. Efeito para carregar dados salvos ao iniciar
  useEffect(() => {
    const carregarCardapio = () => {
      try {
        const salvos = localStorage.getItem('cardapio-pizzaria');
        if (salvos) {
          const parsed = JSON.parse(salvos);
          // Mescla os dados salvos com o cardápio padrão
          setCardapio({
            pizzas: [...cardapioData.pizzas, ...parsed.pizzas.filter(p => 
              !cardapioData.pizzas.some(dp => dp.name === p.name)
            )],
            bebidas: [...cardapioData.bebidas],
            sobremesas: [...cardapioData.sobremesas],
            adicionais: [...cardapioData.adicionais]
          });
        }
      } catch (error) {
        console.error("Erro ao carregar cardápio:", error);
        setCardapio(cardapioData);
      }
    };

    carregarCardapio();
  }, []);

  // 3. Efeito para salvar apenas as pizzas adicionadas
  useEffect(() => {
    const pizzasAdicionadas = cardapio.pizzas.filter(p => 
      !cardapioData.pizzas.some(dp => dp.name === p.name)
    );
    
    if (pizzasAdicionadas.length > 0) {
      localStorage.setItem('cardapio-pizzaria', JSON.stringify({
        ...cardapio,
        pizzas: pizzasAdicionadas
      }));
    }
  }, [cardapio]);

  const adicionarPizza = (novaPizza) => {
    setCardapio(prev => ({
      ...prev,
      pizzas: [...prev.pizzas, novaPizza]
    }));
  };

  return (
    <MenuContext.Provider value={{ cardapio, adicionarPizza }}>
      {children}
    </MenuContext.Provider>
  );
}