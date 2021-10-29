
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import Register from '../Register';
import Login from '../Login';
import Dashboard from '../Dashboard';
import Header from '../../../component/moleculs/Header';
import { store } from '../../../config/redux';



function App() {
  return (
   <Provider store={store}>
      <Router>
          <div className="App">
              <Header />
              <Switch>
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Redirect to="/login" />
              </Switch>
          </div>
      </Router>
   </Provider>
  );
}

export default App;
