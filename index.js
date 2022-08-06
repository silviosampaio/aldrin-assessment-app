import {AppRegistry} from 'react-native';
import {Provider as StoreProviver} from 'react-redux';
import config from './src/config/reactotron';
import Home from './src/pages/Home';
import {name as appName} from './app.json';

import store from './src/store';

const App = () => (
  <StoreProviver store={store}>
    <Home />
  </StoreProviver>
);

AppRegistry.registerComponent(appName, () => App);
