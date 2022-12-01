import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import WriteArticle from './components/WriteArticle'

import './App.css';

function App() {

  const toHome = () => {
    window.location.href = `/`
  }

  return (
    <div className="App">
      <header className='main-header'>
        <h1 onClick={toHome}>자유게시판</h1>
        </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/w' element={<WriteArticle />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
