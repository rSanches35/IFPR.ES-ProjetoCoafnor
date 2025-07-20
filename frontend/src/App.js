import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import DefaultLayout from './components/DefaultLayout';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Products from './pages/products/Products';
import Contact from './pages/contact/Contact';
import History from './pages/history/History';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DefaultLayout><Home/></DefaultLayout>}/>
          <Route path='/sobre' element={<DefaultLayout><About/></DefaultLayout>}/>
          <Route path='/produtos' element={<DefaultLayout><Products/></DefaultLayout>}/>
          <Route path='/historia' element={<DefaultLayout><History/></DefaultLayout>}/>
          <Route path='/contato' element={<DefaultLayout><Contact/></DefaultLayout>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;