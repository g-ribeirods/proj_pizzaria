export function authenticate(username, password) {
  // Credenciais de admin
  if (username === 'admin' && password === 'admin123') {
    return { username, role: 'admin' };
  }
  
  // Qualquer outra combinação válida
  if (username && password) {
    return { username, role: 'cliente' };
  }
  
  return null;
}