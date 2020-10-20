import Link from 'next/link'
import moment from "moment";

const Card = (props) => {
  return (
      <div className=" card ">
        <img
          src={props.article.image}
          alt="blogimg"
          border="0"
        />
        <h3>{props.article.title}</h3>
        <p> By {props.article.author}</p>
        <div className="link">
          <Link href={`article/${props.article.id}`}> 
            <a >Read article</a>
          </Link>
          <p>{moment(props.article.createdAt).format("ll")}</p>
        </div>
      </div>
  );
};

export default Card;



// DONT UNDERSTAND LINK