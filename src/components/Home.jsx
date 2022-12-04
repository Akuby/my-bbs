import '../css/Common.css'
import ArticleList from './ArticleList'
import {useState, useEffect} from 'react';
import axios from 'axios';

function Home(props) {
  
  useEffect(() => {
    dataLoading()
  }, [])
  
  const [articles, setArticles] = useState([]);


  const dataLoading = async() => {
    const result = await axios.get('/bbs');
    setArticles(result.data);
  }
  

  return(
    <div id="Home">
      <h1>Home</h1>
      <ArticleList articles={articles} />  
    </div>
  )
}
export default Home;