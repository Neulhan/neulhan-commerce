import Link from "next/link";

function PostDetailComponent({ props: post }) {
  return (
    <div>
      <h1 className="p-3">{post.title}</h1>
      <p className="my-1">{post.content}</p>
      <p>{post.CreatedAt}</p>
      <Link href="/">돌아가기</Link>
    </div>
  );
}

export default PostDetailComponent;
