import "./index.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./app/store";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import MyProfilePage from "./pages/MyProfilePage";
import UserSettingsPage from "./pages/UserSettingsPage";
import StorePage from "./pages/StorePage";
import SearchPage from "./pages/SearchPage";
import HomeProfilePage from "./pages/HomeProfilePage";

function App() {
  return (
    <Provider store={store}>
      <div className="App h-screen w-screen my-bgGradient font-Rampart">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/user/store" element={<StorePage />} />
            <Route path="/user/myProfile" element={<MyProfilePage />} />
            <Route path="/user/home" element={<HomeProfilePage />} />
            <Route path="/user/search" element={<SearchPage />} />
            <Route path="/user/settings" element={<UserSettingsPage />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
