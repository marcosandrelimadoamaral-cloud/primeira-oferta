import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import Upsell from './Upsell';
import Downsell from './Downsell';
import PixelTracker from './PixelTracker';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <PixelTracker />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/upsell" element={<Upsell />} />
        <Route path="/downsell" element={<Downsell />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
