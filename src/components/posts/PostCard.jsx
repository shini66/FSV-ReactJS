const BODY_PREVIEW_LENGTH = 40;

function PostCard({ post, onClick }) {

    const isLong = post.body.length > BODY_PREVIEW_LENGTH;
    const preview = isLong ? post.body.substring(0, BODY_PREVIEW_LENGTH) + "..." : post.body;

    return (
        <article className="border rounded-lg p-4 shadow-md cursor-pointer hover:bg-gray-100" onClick={onClick}>
            <div>
                <span className="text-sm text-gray-500">Post ID: {post.id}</span>
                <h3 className="text-lg font-bold mb-2">{post.title}</h3>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed flex-1">{preview}</p>
            {isLong && (<button className="text-blue-500 hover:underline mt-2" onClick={() => onClick(post)}>Leer más</button>)}
        </article>
    );
}

export default PostCard;