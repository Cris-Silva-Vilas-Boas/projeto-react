import React from 'react';
import { Route, Switch } from 'react-router-dom';
import List from '../pages/List';
import Register from '../pages/Register';
import Layout from '../components/Layout';
import Detail from '../pages/Detail';
import Edit from '../pages/Edit';
import NotFound from '../pages/NotFound';

const AppRoutes: React.FC = () =>(
    <Layout>
        <Switch>
            <Route path="/" exact component={List}/>
            <Route path="/Register" exact component={Register}/>
            <Route path="/dragon/:id" exact component={Detail}/>
            <Route path="/edit/dragon/:id" exact component={Edit}/>
            <Route path="*" exact component={NotFound}/>
        </Switch>
    </Layout>
);

export default AppRoutes;