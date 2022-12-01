import '../css/Common.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SearchTab from './SearchTab';
import ArticleList from './ArticleList';
function Home() {
  return(
    <div id="Home">
        <SearchTab/>
      <h1>Home</h1>
      <ArticleList />
    </div>
  )
}
export default Home;