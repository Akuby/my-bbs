import '../css/Common.css'
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
function Article(props) {
  const {id, name, author, sub_date} = props.articleData;
  return(
    <Link to={'/article/'+ id}>
    <div className="articleItem">
      <p>{props.idx}</p>
      <h3>{name}</h3>
      <p>{author}</p>
      <p>{format(new Date(sub_date), 'yyyy-MM-dd')}</p>
    </div>
    </Link>
  )
}
export default Article;