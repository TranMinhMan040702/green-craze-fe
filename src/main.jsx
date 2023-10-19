import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App.jsx';
import GlobalStyles from './components/GlobalStyles/GlobalStyles';
import AntdConfigProvider from './components/AntdConfigProvider/index.jsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AntdConfigProvider>
            <QueryClientProvider client={queryClient}>
                <GlobalStyles>
                    <App />
                </GlobalStyles>
            </QueryClientProvider>
        </AntdConfigProvider>
    </React.StrictMode>,
);
