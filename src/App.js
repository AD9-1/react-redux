import { Provider } from "react-redux";
import "./App.css";
import { configureStore } from "@reduxjs/toolkit";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const store = configureStore({
    reducer: {
      type: "user",
    },
  });
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
