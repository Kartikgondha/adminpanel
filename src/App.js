import logo from './logo.svg';
import './App.css';
import Layout from './Component/Layout/Layout'
import { Route, Switch } from 'react-router-dom';
import Medicine from './Container/Medicine/Medicine';
import Patient from './Container/Patient/Patient';
import Doctor from './Container/Doctor/Doctor';
import { Provider } from 'react-redux';
import { configStore } from './redux/store';
import Counter from './Container/Counter/Counter';
import { PersistGate } from 'redux-persist/integration/react';
import UseMemoExample from './Component/Example/UseMemoExample';
import UseCallBack from './Component/Example/UseCallBack';

function App() {
  let {store, persistor} = configStore();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Switch>
            <Route path={'/medicine'} exact component={Medicine} />
            <Route path={'/patient'} exact component={Patient} />
            <Route path={'/doctor'} exact component={Doctor} />
            <Route path={'/counter'} exact component={Counter} />  
            <Route path={'/UseMemoExample'} exact component={UseMemoExample} />  
            <Route path={'/UseCallBack'} exact component={UseCallBack} />  
          </Switch>
        </Layout>
      </PersistGate>
    </Provider>

  );
}

export default App;
