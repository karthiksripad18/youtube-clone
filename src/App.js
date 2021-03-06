import React, {useState, useEffect} from 'react';
import { Container } from 'react-bootstrap';
import { Route, Switch, Redirect, useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';

import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import HomeScreen from './screens/homeScreen/HomeScreen';
import LoginScreen from './screens/loginScreen/LoginScreen';

import './_app.scss';

const Layout = ({children}) => {
    const [sidebar, toggleSidebar] = useState(false);
    const handleToggleSidebar = () => toggleSidebar(value => !value);
    return (
        <>
            <Header handleToggleSidebar={handleToggleSidebar} />
            <div className="app__container">
                <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
                <Container fluid className="app__main">
                    {children}
                </Container>
            </div>
        </>
    )
}

const App = () => {
    const history = useHistory();
    const {accessToken, loading} = useSelector(state => state.auth);

    useEffect(() => {
        if (!loading && !accessToken) {
            history.push('/auth');
        }
    }, [accessToken, loading, history])

    return (
        <Switch>
            <Route path="/" exact>
                <Layout>
                    <HomeScreen />
                </Layout>
            </Route>
            <Route path="/auth">
                <LoginScreen />
            </Route>
            <Route path="/search">
                <Layout>
                    <h1>Search Results</h1>
                </Layout>
            </Route>

            <Route>
                <Redirect to="/" />
            </Route>
        </Switch>
    )
}

export default App;
