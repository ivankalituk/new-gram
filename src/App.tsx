import { Route, Routes } from "react-router-dom";
import "./App.scss";
import ChatPage from "./pages/chatPage/chatPage";
import RegistrationPage from "./pages/registrationPage/registrationPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/chat/:chatId" element={<ChatPage />}></Route>
        <Route path="/" element={<ChatPage />}></Route>
        <Route path="/registration" element={<RegistrationPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
