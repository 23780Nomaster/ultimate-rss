import { registerRootComponent } from 'expo';
import { NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store';
import { theme } from './theme';

function Main() {
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <App />
      </NativeBaseProvider>
    </Provider>
  );
}

registerRootComponent(Main);
