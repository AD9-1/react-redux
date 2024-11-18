import { Provider } from "react-redux";
import "./App.css";
import { configureStore } from "@reduxjs/toolkit";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserReducer from "./UserReducer"
import Edit from "./components/Edit";
import Create from "./components/Create";

function App() {
  const store = configureStore({
    reducer: {
      userss:UserReducer
    },
  });
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create/>} />
            <Route path="/edit/:id" element={<Edit/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
