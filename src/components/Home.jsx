import '../css/Common.css'
import ArticleList from './ArticleList'
import {useState, useEffect} from 'react';
import axios from 'axios';

function Home(props) {
  const [articles, setArticles] = useState();
  
  useEffect(() => {
    dataLoading()
  }, [])
  
  const dataLoading = async() => {
    const result = await axios.get('/bbs');
    console.log(result.data)
    setArticles(result.data);
    console.log(articles)
  }

  return(
    <div id="Home">
      <h1>Home</h1>
      <ArticleList articles={articles} />
    </div>
  )
}
export default Home;