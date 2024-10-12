// Importações
import React from 'react';
import { createRoot } from 'react-dom/client';

// Importar componente
import Componente from './Componente';

// Estrutura do render
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<Componente />);