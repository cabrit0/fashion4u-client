import "./index.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./app/store";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Provider store={store}>
      <div className="App h-screen w-screen my-bgGradient  font-Rampart">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
