import '../css/Common.css'
function WriteArticle() {
  const submit = () => {
    
  }
  return(
    <div className="write-article">
      <button onClick={()=>{window.history.back()}}>뒤로가기</button>
      <h1>글 쓰기</h1>
      <div className='write-article-info'>
      <label htmlFor="title">글 제목</label>
      <input type="text" id='title' />
      </div>
      <div className='write-article-content'>
      <label htmlFor="content">글 내용</label>
      <input type="text" id='content' />
      </div>
      <button onClick={()=>{submit()}}>저장</button>
    </div>
  )
}
export default WriteArticle;