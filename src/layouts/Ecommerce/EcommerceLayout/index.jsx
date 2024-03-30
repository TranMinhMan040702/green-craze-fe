import Header from '../components/Header';
import Footer from '../components/Footer';
import './ecommercelayout.scss';
import Chat from '../components/Chat';
import { useState } from 'react';
import { WechatOutlined } from '@ant-design/icons';
import { isTokenStoraged } from '../../../utils/storage';
import { StompSessionProvider } from 'react-stomp-hooks';

const url = import.meta.env.VITE_API_URL + '/core/infrastructure/sockjs';

function EcommerceLayout({ children }) {
    const isAuthen = isTokenStoraged();
    const [showChat, setShowChat] = useState(false);
    return (
        <>
            <Header />
            <div className="main">
                <div className="min-h-screen mx-auto">{children}</div>
            </div>
            <Footer />
            {isAuthen ? (
                <StompSessionProvider url={url} onConnect={() => console.log('chat connected')}>
                    {!showChat ? (
                        <div
                            onClick={() => setShowChat(true)}
                            className="bg-white fixed bottom-0 right-[7rem] border rounded-lg shadow-xl"
                        >
                            <div className="px-[2rem] cursor-pointer text-[--primary-color] py-[0.6rem] flex gap-[1rem] items-center">
                                <WechatOutlined className="text-[3rem]" />
                                <p className="text-[2rem]">Chat</p>
                            </div>
                        </div>
                    ) : (
                        <div className="relative">
                            <Chat setShowChat={setShowChat} />
                        </div>
                    )}
                </StompSessionProvider>
            ) : null}
        </>
    );
}

export default EcommerceLayout;
