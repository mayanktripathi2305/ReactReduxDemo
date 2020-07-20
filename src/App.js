import React from "react";
import { Provider } from "react-redux";
import store from "./Redux/store";
import "./App.css";
import Pickle from "./Components/Pickle";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Pickle />
      </div>
    </Provider>
  );
}

export default App;
