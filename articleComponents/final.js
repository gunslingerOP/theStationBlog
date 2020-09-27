import { getStaticProps } from "../pages";

const Final = (props) => {
  return (
    <>
      <section id="last">
        <h2>{props.article.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: props.article.text }} />
      </section>
    </>
  );
};
export default Final;
