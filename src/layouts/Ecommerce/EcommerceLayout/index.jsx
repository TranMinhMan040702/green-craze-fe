import Header from '../components/Header';
import Footer from '../components/Footer';
import './ecommercelayout.scss';
import { isTokenStoraged } from '../../../utils/storage';
import ChatBox from './ChatBox';
import { useState } from 'react';
import ChatWSGlobalWrapper from '../../../components/ChatWSGlobalWrapper';

function EcommerceLayout({ children }) {
    const isAuthen = isTokenStoraged();
    const [showChat, setShowChat] = useState(false);

    return (
        <ChatWSGlobalWrapper>
            <Header />
            <div className="main">
                <div className="min-h-screen mx-auto">{children}</div>
            </div>
            <Footer />
            {isAuthen ? <ChatBox setShowChat={setShowChat} showChat={showChat} /> : null}
        </ChatWSGlobalWrapper>
    );
}

export default EcommerceLayout;
