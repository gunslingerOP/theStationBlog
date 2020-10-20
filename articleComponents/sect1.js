import { getStaticProps } from "../pages"
import moment from "moment";


const Sect1=(props)=>{
    return(
        <section id="section1">
        <div id="secondHeader">
    <h2 > {props.article.title}</h2>
    </div>
    <div id="date">
      <span>{moment(props.article.createdAt).format('ll')}</span>  
    </div>
    </section>
    )
}
export default Sect1