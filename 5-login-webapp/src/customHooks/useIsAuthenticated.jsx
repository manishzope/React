import { useState } from 'react';

const useIsAuthenticated = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (sessionStorage.getItem('isLoggedIn')) {
    setIsAuthenticated(sessionStorage.getItem('isLoggedIn'));
  }

  return [isAuthenticated];
};

export default useIsAuthenticated;
