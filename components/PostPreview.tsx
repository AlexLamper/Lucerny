import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div
      className="p-4 rounded-md shadow-sm bg-[#ebedee]"
    >
      <p className="text-sm text-slate-400">{props.date}</p>

      <Link href={`/posts/${props.slug}`}>
        <h2 className="text-slate-800 hover:underline mb-4 font-semibold text-xl">{props.title}</h2>
      </Link>
      <p className="text-slate-700">{props.subtitle}</p>
    </div>
  );
};

export default PostPreview;
