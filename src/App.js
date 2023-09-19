import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Tours from './Components/Tours';
import Tour from './Components/Tour';
import Layout from './Components/Layout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<h3>Главная страница</h3>} />
            <Route path="tours" element={<Tours />} />
            <Route path="tours/:slug" element={<Tour />} />
            <Route path="*" element={<h3>Не найдено</h3>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
