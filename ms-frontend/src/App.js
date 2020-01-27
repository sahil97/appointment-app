import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from "react-router-dom";
import Dashboard from './containers/Dashboard/Dashboard';
import './App.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                  <Route path="/" component={Dashboard} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;