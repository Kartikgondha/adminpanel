import logo from './logo.svg';
import './App.css';
import Layout from './Component/Layout/Layout'
import { Route, Switch } from 'react-router-dom';
import Medicine from './Container/Medicine/Medicine';
import Patient from './Container/Patient/Patient';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path={'/medicine'} exact component={Medicine} />
        <Route path={'/patient'} exact component={Patient} />
      </Switch>
    </Layout>
  );
}

export default App;
