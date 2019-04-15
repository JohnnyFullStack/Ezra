import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import thunk from 'redux-thunk'

import Login from './components/Login';
import reducers from './redux/reducers'

const Users =()=>{
    return <div>Log in sucess and welcome to Ezra</div>
}

ReactDOM.render(
    <Provider store={createStore(reducers,applyMiddleware(thunk))}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path='/' exact component={Login}></Route>
                    <Route path='/users' exact component={Users}></Route>
                </Switch>

            </div>
        </BrowserRouter>
    </Provider>,document.querySelector('#root'));