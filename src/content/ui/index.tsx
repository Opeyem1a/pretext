import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Content } from './App';
import './styles.css';

const root = document.createElement("div");
root.id = "specific"
document.body.appendChild(root)

createRoot(root).render(
    <StrictMode>
        <Content />
    </StrictMode>
);