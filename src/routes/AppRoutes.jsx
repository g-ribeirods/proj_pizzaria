import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from '../pages/Login.jsx';
import { Cardapio } from '../pages/Cardapio.jsx';
import { Cozinha } from '../pages/Cozinha.jsx';
import { Entregas } from '../pages/Entregas.jsx';
import { Admin } from '../pages/Admin.jsx';
import { NotFound } from '../pages/NotFound.jsx';
import { AdminLayout } from '../components/AdminLayout.jsx';
import { ProtectedRoute } from './ProtectedRoute.jsx';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        {/* Rotas acessíveis para clientes e admins logados */}
        <Route element={<ProtectedRoute />}>
          <Route path="/cardapio" element={<Cardapio />} />
          <Route path="/cozinha" element={<Cozinha />} />
          <Route path="/entregas" element={<Entregas />} />
        </Route>

        {/* Rotas restritas apenas para admin */}
        <Route element={<ProtectedRoute requiredRole="admin" />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Admin />} />
            {/* outras rotas administrativas */}
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}