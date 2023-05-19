import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../src/components/home/home';
import Countries from '../src/components/countries/countries';
import GlobalStyle from './common/css/globalStyle';
import Options from './components/options/option';
import Second from './components/second/second';

const App = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/tripMBTI">
                    <Options />
                </Route>
                <Route exact path="/second">
                    < Second/>
                </Route>
                <Route>
                    <Route path="/result/:countryName" component={Countries} />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default App;
