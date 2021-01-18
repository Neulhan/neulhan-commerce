import Link from "next/link";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";

function HomePage({ posts }) {
  return (
    <ul>
      {posts.map((post, i: number) => (
        <li className="p-8" key={i}>
          <Link href={"/post/" + post.ID}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // Call an external API endpoint to get posts
  const res = await fetch("http://127.0.0.1:8080/posts");
  const data = await res.json();
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts: data.posts,
    },
  };
};

export default HomePage;
