import '../css/Common.css'
import Article from './Article'
import Pagination from './Pagination'
import {useState} from 'react'
function ArticleList(props) {

  const [currentPage, setCurrentPage] = useState(1)
  const itemPerPage = 2;
  
  const currentArticleList= (articleList) => {
    const startIdx = (currentPage-1) * itemPerPage // 0
    const endIdx = startIdx + itemPerPage // 1
    const slicedList = articleList.slice(startIdx,endIdx)
    return slicedList;
  }

  const result = currentArticleList(props.articles).map(
    (data, idx) => <Article key={idx} idx={idx+1} articleData={data}/>
  )

  return(
    <div id="ArticleList">
      <h1>ArticleList</h1>
      {result}
      <Pagination total={props.articles.length} itemPerPage={itemPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  )
}

export default ArticleList;