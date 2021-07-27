import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from '@components/Layout';

import Home from '@routes/Home';
import Login from '@routes/Login';
import Register from '@routes/Register';
import Favorites from '@routes/Favorites';
import Search from '@routes/Search';
import PrivateRoute from '@routes/PrivateRoute';

import { AuthProvider } from '@utils/auth';
import { SearchProvider } from '@utils/search';

function App() {
  return (
    <AuthProvider>
      <SearchProvider>
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/search" component={Search} />
              <PrivateRoute exact path="/favorites" component={Favorites} />
              <Route path="/" render={() => <div>404 - Page Not Found</div>} />
            </Switch>
          </Layout>
        </Router>
      </SearchProvider>
    </AuthProvider>
  );
}

export default App;
