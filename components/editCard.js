import Link from "next/link";
import moment from "moment";
import { Button } from "antd";
const EditCard = (props) => {
  
  return (
    <div className=" card ">
      <img src={props.article.image} alt="blogimg" border="0" />
      <h3>{props.article.title}</h3>
      <p> By {JSON.parse(localStorage.getItem("blog_user")).name}</p>
      <div className="link">
        <Link href={`blog/${props.article.id}`}>
          <Button type="primary">Edit article</Button>
        </Link>
        
        <p>{moment(props.article.createdAt).format("ll")}</p>
      </div>
    </div>
  );
};

export default EditCard;
