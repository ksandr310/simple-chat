import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './ChatPage.module.scss';

const CLASS = 'chat-page';

const headerText = 'WebSocket chat room';

// type Message = {
//     body: string;
//     sender: string;
//     sentAt: number; // Date.now()
// };

export const ChatPage: React.FC = () => {
    const { name } = useParams();
    // const navigate = useNavigate();
    // const ws = React.useRef();
    // const scrollTarget = React.useRef(null);

    // const [messages, setMessages] = React.useState<Array<Message>>([]);
    // const [messageBody, setMessageBody] = React.useState('');
    // const [isConnectionOpen, setConnectionOpen] = React.useState(false);

    // Scrolling to the last message
    // React.useEffect(() => {
    //     if (scrollTarget.current) {
    //         scrollTarget.current.scrollIntoView({ behavior: 'smooth' });
    //     }
    // }, [messages.length]);

    return (
        <div className={styles[CLASS]}>
            <div className={styles[`${CLASS}__header`]}>{headerText}</div>
            <div className={styles[`${CLASS}__container`]}></div>
            <div className={styles[`${CLASS}__footer`]}>
                <div className={styles[`${CLASS}__footer-title`]}>You are chatting as "{name}"</div>
                <div className={styles[`${CLASS}__footer-input`]}>
                    <input></input>
                    <button>send</button>
                </div>
            </div>
        </div>
    );
};
