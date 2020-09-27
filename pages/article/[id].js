import Header from "../../components/header";
import Sect1 from '../../articleComponents/sect1'
import Sectimg from '../../articleComponents/sectimg'
import Sect3 from '../../articleComponents/sect3'
import Final from '../../articleComponents/final'
import Foot from '../../components/footer'

import {useState, useEffect} from 'react'

const Article = (props) => {
  const [article, setArticle] = useState({});

  useEffect(() => {
    setArticle(props.post.article);
    console.log(props.post.article)
  }, []);

  return (
    <body>
      <Header />
       <main className="container">
        <Sect1 article={article}/>
         <Sectimg article={article}/>
        <Sect3 article={article}/>
        <Final article={article}/>
      </main> 
      <Foot/>
    </body>
  );
};
export default Article

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://mashriq.herokuapp.com/dash/v1/articles')
  const posts = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = posts.articles.map((post) => ({
    params: { id: post.id.toString() },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`https://mashriq.herokuapp.com/dash/v1/article/${params.id}`)
  const post = await res.json()

  // Pass post data to the page via props
  return { props: { post } }
}
