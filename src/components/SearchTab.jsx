import '../css/Common.css'
function SearchTab() {
  return(
    <div className="search-tab">
      <input type="text" placeholder='제목, 작성자, 글 번호로 검색하세요' />
      <button>검색</button>
    </div>
  )
}
export default SearchTab;