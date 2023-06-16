import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Posts from './pages/Posts';
import CreatePosts from './pages/CreatePosts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Posts />} />
          <Route path="create" element={<CreatePosts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
