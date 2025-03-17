import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import DefaultLayout from './components/DefaultLayout';
import Home from './pages/home/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<DefaultLayout><Home/></DefaultLayout>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
} export default App;