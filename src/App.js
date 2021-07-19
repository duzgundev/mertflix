import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '@routes/Home';
import Login from '@routes/Login';
import Register from '@routes/Register';
import Favorites from '@routes/Favorites';
import PrivateRoute from '@routes/PrivateRoute';

import { AuthProvider } from '@utils/auth';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute exact path="/favorites" component={Favorites} />
          <Route path="/" render={() => <div>404 - Page Not Found</div>} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
