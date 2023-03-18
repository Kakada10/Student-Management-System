import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SingleCourse from './components/courses/SingleCourse';
import Home from './components/home/Home';
import SessionList from './components/sessions/SessionList';
import StudentList from './components/students/StudentList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/:id" element={<SingleCourse />} />
        <Route path="/course/student-list/:id" element={<StudentList />} />
        <Route path="/course/session-list/:id" element={<SessionList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
