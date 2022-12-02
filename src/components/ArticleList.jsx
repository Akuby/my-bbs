import '../css/Common.css'
import Article from './Article'
import {useState} from 'react'
function ArticleList(props) {
  
  const [articles, setArticles] = useState(props.articles)

  // const result = articles.map(
  //   (data, idx) => <Article key={idx} articleData={data}/>
  // )

  return(
    <div id="ArticleList">
      <h1>ArticleList</h1>
      {/* {result} */}
    </div>
  )
}
export default ArticleList;