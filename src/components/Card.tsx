type Props = {
  post: any;
  onReadMore: (post: any) => void;
};

function Card({ post, onReadMore }: Props) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md">
      <img src={post.image} alt={post.title} className="h-52 w-full object-cover" />

      <div className="p-5">
       <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-900">
          {post.category}
        </span>

        <h3 className="mt-3 text-xl font-bold text-slate-800">{post.title}</h3>

        <p className="mt-2 text-sm text-slate-500">
          Por {post.author} • {post.date}
        </p>

        <p className="mt-3 text-slate-600">{post.summary}</p>

        <button
          onClick={() => onReadMore(post)}
          className="mt-5 rounded-lg bg-blue-900 px-4 py-2 text-white"
        >
          Ver más
        </button>
         
      </div>
    </div>
  );
}

export default Card;