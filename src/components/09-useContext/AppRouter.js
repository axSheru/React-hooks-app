import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Routes>
                    // NOTE: After V6 by default exact is defined, this is to match exactly the given route.
                    <Route exact path='/' element={ <HomeScreen /> } />
                    <Route path='/about' element={ <AboutScreen /> } />
                    <Route path='/login' element={ <LoginScreen /> } />
                </Routes>
            </div>
        </Router>
    );
}
