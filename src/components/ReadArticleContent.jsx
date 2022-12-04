import '../css/Common.css'

function ReadArticleContent(props) {

  const {name, contents, author, sub_date} = props.articleContent

  return (
    <div className='read-article'>
      <h1>{name}</h1>
      <div className='read-article-info'>
      <p>{author}</p>
      <p>{sub_date}</p>
      </div>
      <div className='read-article-content'>
      <p>{contents}</p>
      </div>
    </div>
  )
}

export default ReadArticleContent;