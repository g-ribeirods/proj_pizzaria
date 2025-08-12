import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export function ProtectedRoute({ requiredRole }) {
  const { user } = useContext(AuthContext);

  if (!user) return <Navigate to="/" replace />; // não logado

  if (requiredRole && user.role !== requiredRole) {
    // Se o papel for diferente do necessário, redireciona para cardápio
    return <Navigate to="/cardapio" replace />;
  }

  return <Outlet />;
}
