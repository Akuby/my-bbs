import {BrowserRouter, Routes, Route} from 'react-router-dom'
import WriteArticle from './components/WriteArticle'
import Home from './components/Home';
import Header from './components/Header'
import NotFound from './components/NotFound'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/w' element={<WriteArticle />} />
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
