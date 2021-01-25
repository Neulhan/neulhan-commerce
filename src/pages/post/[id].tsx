import Link from "next/link";
import PostDetailComponent from "@components/productCard";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";

function PostDetail({ post }) {
  console.log(post);
  return <PostDetailComponent props={post}></PostDetailComponent>;
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Call an external API endpoint to get posts
  // const res = await fetch("http://127.0.0.1:8080/posts");
  // const data = await res.json();

  const data = {
    posts: [],
  };

  // Get the paths we want to pre-render based on posts
  const paths = data.posts.map((post) => `/post/${post.ID}`);
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  // const res = await fetch(`http://127.0.0.1:8080/post/${params.id}`);
  // const { post } = await res.json();
  const post = {};

  // Pass post data to the page via props
  return { props: { post } };
};

export default PostDetail;
