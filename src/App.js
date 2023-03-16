import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SingleCourse from './components/courses/SingleCourse';
import Home from './components/home/Home';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/:id" element={<SingleCourse />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
