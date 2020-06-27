import fetch from "isomorphic-unfetch";

const Post = props => (
  <div>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?[pb]>/g, "")}</p>
    {props.show.image ? <img src={props.show.image.medium} /> : null}
  </div>
);

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();
  console.log(`This is Post.getInitialProps`);
  // console.log(`Fetched show: ${show.name}`);
  return { props: {show} };
};

export default Post;