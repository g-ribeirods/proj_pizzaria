import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Cardapio } from '../pages/Cardapio';
import { Cozinha } from '../pages/Cozinha';
import { Entregas } from '../pages/Entregas';
import { Admin } from '../pages/Admin';
import { NotFound } from '../pages/NotFound';
import { AdminLayout } from '../components/AdminLayout';
import { Carrinho } from '../pages/Carrinho';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        
        <Route element={<AdminLayout />}>
          <Route path="/cardapio" element={<Cardapio />} />
          <Route path="/carrinho" element={<Carrinho />} /> {/* Nova rota */}
          <Route path="/cozinha" element={<Cozinha />} />
          <Route path="/entregas" element={<Entregas />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}