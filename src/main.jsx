import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import App from './App.jsx';
import GlobalStyles from './components/GlobalStyles/GlobalStyles';
import AntdConfigProvider from './components/AntdConfigProvider/index.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <GoogleOAuthProvider clientId="841642161726-v3mbpdq17eajakh8duatq7kvah65lk83.apps.googleusercontent.com">
            <AntdConfigProvider>
                <QueryClientProvider client={queryClient}>
                    <GlobalStyles>
                        <App />
                    </GlobalStyles>
                    <ReactQueryDevtools initialIsOpen={false} />
                </QueryClientProvider>
            </AntdConfigProvider>
        </GoogleOAuthProvider>
    </React.StrictMode>,
);
