import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from '../pages/Login.jsx';
import { Cardapio } from '../pages/Cardapio.jsx';
import { Cozinha } from '../pages/Cozinha.jsx';
import { Entregas } from '../pages/Entregas.jsx';
import { Admin } from '../pages/Admin.jsx';
import { NotFound } from '../pages/NotFound.jsx';
import { AdminLayout } from '../components/AdminLayout.jsx';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}