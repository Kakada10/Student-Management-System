import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from './components/auth/login'
import CourseDetail from "./components/course/courseDetail";
import SessionDetail from "./components/session/sessionDetail";
import AttendanceList from "./components/attendance/AttendanceList";

function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/courses/session/:id" element={<SessionDetail />} />
        <Route path="/courses/attendance-list/:id" element={<AttendanceList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Index;
