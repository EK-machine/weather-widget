import { Provider } from "react-redux";
import Layout from './components/Layout/Layout';
import store from './redux/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Layout />
      </div>
    </Provider>
  );
}

export default App;
