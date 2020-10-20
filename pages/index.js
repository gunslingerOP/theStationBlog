import Header from "../components/header";
import HomeCover from "../components/homeCover";
import Card from "../components/card";
import Foot from "../components/footer";

const Home = (props) => {
  return (
      <div>
        <Header />

        <main>
          <HomeCover />
          <section className="container blogCards">
            {props.posts.articles.map((article, index) => (
              <Card key={index} article={article} />
            ))}
          </section>

          <Foot />
        </main>
      </div>
  );
};

export default Home;

export async function getStaticProps() {
  const res = await fetch("https://mashriq.herokuapp.com/dash/v1/articles");
  const posts = await res.json();
  return { props: { posts } };
}

// export async function getStaticPaths() {
//   // Call an external API endpoint to get posts
//   const res = await fetch('https://mashriq.herokuapp.com/dash/v1/articles')
//   const posts = await res.json()
// console.log(posts)
//   // Get the paths we want to pre-render based on posts
//   const paths = posts.articles.map((post) => ({
//     params: {post}}))

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: false }
// }
