import { Provider } from "react-redux";
import Body from "./components/Body";
import Browse from "./components/Browse";
import appstore from "./utils/appstore";

function App() {
  return (
    <Provider store={appstore}>
      <Body />
    </Provider>
  );
}

export default App;
