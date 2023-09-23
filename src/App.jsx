import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import PrivateRoute from './components/PrivateRoute';
import routes from './routes';
import './index.css';

function App() {
    return (
        <Router>
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
        </Router>
    );
}

export default App;
