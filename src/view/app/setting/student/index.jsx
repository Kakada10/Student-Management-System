import List from './List';
import { Route, Routes, useMatch } from 'react-router-dom';

export default function Student() {
  const { url } = useMatch();
  return (
    <Routes>
      <Route path={`${url}/list`} element={<List />} />
    </Routes>
  );
}
