import { Routes, Route, Navigate } from 'react-router-dom'; // Adicione Navigate
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
      {/* Rota padrão redireciona para login */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      
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
        </Route>
      </Route>
      
      {/* Rota não encontrada */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}