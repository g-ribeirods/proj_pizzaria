import { Routes, Route } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Cardapio } from '../pages/Cardapio';
import { Carrinho } from '../pages/Carrinho';
import { Cozinha } from '../pages/Cozinha';
import { Entregas } from '../pages/Entregas';
import { Admin } from '../pages/Admin';
import { NotFound } from '../pages/NotFound';
import { ProtectedRoute } from './ProtectedRoute';
import { AdminLayout } from '../components/AdminLayout';

export function AppRoutes() {
  return (
    <Routes>
      {/* Rota pública */}
      <Route path="/login" element={<Login />} />
      
      {/* Rotas protegidas */}
      <Route element={<ProtectedRoute allowedRoles={['admin', 'cliente']} />}>
        <Route element={<AdminLayout />}>
          {/* Rotas acessíveis a todos logados */}
          <Route path="/cardapio" element={<Cardapio />} />
          <Route path="/carrinho" element={<Carrinho />} />
          
          {/* Rotas restritas a admin */}
          <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
            <Route path="/cozinha" element={<Cozinha />} />
            <Route path="/entregas" element={<Entregas />} />
            <Route path="/admin" element={<Admin />} />
          </Route>
          
          {/* Rota padrão */}
          <Route index element={<Cardapio />} />
        </Route>
      </Route>
      
      {/* Rota não encontrada */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}