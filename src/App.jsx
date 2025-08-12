import { AppRoutes } from './routes/AppRoutes';
import { CartProvider } from './context/CartContext';

function App() {
  return ( // Faltou este return
    <CartProvider>
      <AppRoutes />
    </CartProvider>
  );
}

export default App;