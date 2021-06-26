import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../routes/Home';
import About from '../routes/About';
import Browse from '../routes/Browse';
import Login from '../routes/Login';
import Register from '../routes/Register';
import Favorites from '../routes/Favorites';

import { AuthProvider } from '../utils/auth';
import PrivateRoute from '../routes/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/about" component={About} />
          <Route exact path="/browse" component={Browse} />
          <PrivateRoute exact path="/favorites" component={Favorites} />
          <Route path="/" render={() => <div>404 - Page Not Found</div>} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
