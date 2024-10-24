import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { About, Contacts, Home } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
