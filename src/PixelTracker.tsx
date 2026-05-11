import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from './lib/fbpixel';

export default function PixelTracker() {
  const location = useLocation();

  useEffect(() => {
    // Registra PageView no carregamento inicial e a cada mudança de rota
    trackPageView();
  }, [location.pathname, location.search]);

  return null;
}
