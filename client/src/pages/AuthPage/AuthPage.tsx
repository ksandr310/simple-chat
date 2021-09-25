import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';
import styles from './AuthPage.module.scss';

const CLASS = 'auth-page';

const title = 'Hey there';
const description = 'What should your peers call you?';
const inputPlaceholder = 'You name or nickname';
const startChat = 'Start chatting';

export const AuthPage: React.FC = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');

    const navigateToChatPage = () => {
        if (name !== '') navigate?.(`/chat/${name}`);
    };

    return (
        <div className={styles[CLASS]}>
            <div className={styles[`${CLASS}__title`]}>{title}</div>
            <div className={styles[`${CLASS}__description`]}>{description}</div>
            <input
                className={styles[`${CLASS}__input`]}
                onKeyPress={({ key }) => {
                    if (key === 'Enter') navigateToChatPage();
                }}
                type={'text'}
                autoComplete={'off'}
                placeholder={inputPlaceholder}
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button
                className={cn(styles[`${CLASS}__button`], {
                    [styles[`${CLASS}__button--disabled`]]: !name,
                })}
                disabled={!name}
                onClick={navigateToChatPage}
            >
                {startChat}
            </button>
        </div>
    );
};
