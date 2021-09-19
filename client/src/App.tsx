import React from 'react';
import { AuthPage } from './pages';

import styles from './App.module.scss';

const CLASS = 'app';

const App: React.FC = () => {
    return (
        <div className={styles[CLASS]}>
            <AuthPage />
        </div>
    );
};

export default App;
