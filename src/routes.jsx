import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from './components/auth/login'
import CourseDetail from "./components/course/courseDetail";
import SessionDetail from "./components/session/sessionDetail";

function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/courses/:id/session" element={<SessionDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Index;
