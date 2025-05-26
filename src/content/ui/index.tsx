import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Content } from './App';

const root = document.createElement('div');
root.id = 'root';

const shadow = root.attachShadow({ mode: 'open' });

document.body.appendChild(root);

createRoot(shadow).render(
    <StrictMode>
        <Content />
    </StrictMode>
);
