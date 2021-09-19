import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthPage } from './pages';

import styles from './App.module.scss';

const CLASS = 'app';

const App: React.FC = () => (
    <div className={styles[CLASS]}>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<AuthPage />} />
                <Route path={'/chat/:name'} element={<div>{'chat page'}</div>} />
            </Routes>
        </BrowserRouter>
    </div>
);

export default App;
