import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//Componentes de Página
import { AboutPage } from './Pages/AboutPage';
import { ChefsPage } from './Pages/ChefsPage';
import { ContactPage } from './Pages/ContactPage';
import {HomePage} from './Pages/HomePage';
import { MenuPage } from './Pages/MenuPage';

//Error 404 Página
import { NoPage } from './Pages/NoPage';

//Botones de Reservación
import { reservation } from './SubPage/reservation';

export const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={ HomePage } />
				<Route exact path="/about" component={ AboutPage } />
				<Route exact path="/menu" component={ MenuPage} />
				<Route exact path="/chefs" component={ ChefsPage } />
				<Route exact path="/contact" component={ ContactPage } />
                
                <Route exact path="/reservation" component={reservation} />

				<Route exact component={ NoPage } />
            </Switch>
        </Router>
    )
}
