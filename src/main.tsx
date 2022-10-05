import ReactDOM from 'react-dom/client';
import './index.css';
import About from './pages/About';
import Root from './pages/Root';
import { Route, Router } from './Router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <Route path="/" component={<Root />} />
    <Route path="/about" component={<About />} />
  </Router>
);
