import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthPage, ChatPage } from './pages';

import styles from './App.module.scss';

const CLASS = 'app';

const App: React.FC = () => (
    <div className={styles[CLASS]}>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<AuthPage />} />
                <Route path={'/chat/:name'} element={<ChatPage />} />
            </Routes>
        </BrowserRouter>
    </div>
);

export default App;
