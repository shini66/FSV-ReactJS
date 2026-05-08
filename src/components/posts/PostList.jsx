import { useState } from "react";
import usePosts from "../../hooks/usePosts";
import PostCard from "./PostCard";
import PostModal from "./PostModal";
import Button from "../ui/Buttom";

function PostList() {
    const { posts, loadMore, hasMore, loading, error } = usePosts();
    const [selectedPost, setSelectedPost] = useState(null);

    if (loading) {
        return  (<div className="flex flex-row gap-2">
                <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
                <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
                <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
            </div>);
    }

    if (error) {
        return (<div className="text-red-500 text-center">{error}</div>);
    }

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {posts.map((post) => (
                    <PostCard key={post.id} post={post} onClick={() => setSelectedPost(post)} />
                ))}
            </div>
            {hasMore && (
                <Button label="Cargar más" onClick={loadMore} className="my-4 justify-center" disabled={loading} />
            )}
            {selectedPost && (
                <PostModal post={selectedPost} onClose={() => setSelectedPost(null)} className="my-4" />
            )}
        </>
    );
}

export default PostList;