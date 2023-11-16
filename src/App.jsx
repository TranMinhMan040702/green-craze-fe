import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import PrivateRoute from './components/PrivateRoute';
import routes from './routes';
import './index.css';
import { HistoryRouter } from './components/HistoryRouter';
import myHistory from './utils/myHistory';
import { createContext, useEffect, useState } from 'react';
import getSignalRConnection from './utils/signalR';
import { notification } from 'antd';
import { useGetListNotification } from './hooks/api';

export const NotificationContext = createContext();

function App() {
    const { data, isLoading, refetch } = useGetListNotification();
    const [countNotify, setCountNotify] = useState(0);
    useEffect(() => {
        (async () => {
            const connection = await getSignalRConnection();
            connection.on('ReceiveNotification', (data) => {
                refetch();
                notification.success({
                    message: data.title,
                    description: data.content,
                });
            });
        })();
    }, []);
    useEffect(() => {
        if (data) {
            setCountNotify(data?.data?.items?.filter((item) => !item.status)?.length || 0);
        }
    }, [data, isLoading]);

    return (
        <NotificationContext.Provider
            value={{ countNotify, notifications: data?.data?.items || [], refetchNotification: refetch }}
        >
            <HistoryRouter history={myHistory}>
                <div className="App">
                    <Routes>
                        {routes.map((page, index) => {
                            const loginRequire = page.private;
                            const roles = page.roles;
                            return (
                                <Route
                                    key={index}
                                    path={page.path}
                                    element={
                                        page.layout ? (
                                            loginRequire ? (
                                                <PrivateRoute roles={roles}>
                                                    <page.layout>
                                                        <page.component />
                                                    </page.layout>
                                                </PrivateRoute>
                                            ) : (
                                                <page.layout>
                                                    <page.component />
                                                </page.layout>
                                            )
                                        ) : (
                                            <page.component />
                                        )
                                    }
                                />
                            );
                        })}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </HistoryRouter>
        </NotificationContext.Provider>
    );
}

export default App;
