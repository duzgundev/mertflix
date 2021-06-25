import Home from './routes/Home';
import About from './routes/About';
import Browse from './routes/Browse';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/browse" exact component={Browse} />
        <Route path="/" render={() => <div>404 - Page Not Found</div>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
