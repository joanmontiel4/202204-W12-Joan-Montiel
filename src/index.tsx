import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import { CharacterProvider } from './context/character.provider';

const root = ReactDOM.createRoot(
    document.querySelector('.container') as HTMLElement
);
root.render(
    <React.StrictMode>
        <CharacterProvider>
            <App />
        </CharacterProvider>
    </React.StrictMode>
);
