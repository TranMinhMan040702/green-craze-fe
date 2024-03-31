import { StompSessionProvider } from 'react-stomp-hooks';
import { isTokenStoraged } from '../../utils/storage';

const url = import.meta.env.VITE_API_URL + '/core/infrastructure/sockjs';

function ChatWSGlobalWrapper({ children }) {
    const isAuthen = isTokenStoraged();
    return (
        <>
            {isAuthen ? (
                <StompSessionProvider url={url} onConnect={() => console.log('chat connected')}>
                    {children}
                </StompSessionProvider>
            ) : (
                <>{children}</>
            )}
        </>
    );
}

export default ChatWSGlobalWrapper;
