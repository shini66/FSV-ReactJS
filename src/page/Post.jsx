import PostList from "../components/posts/PostList";

function Post() {

    return (
        <section className="mt-3">
            <div className="mb-8 justify-center items-center flex">
                <h1 className="text-3xl font-bold text-gray-800">Posts</h1>
            </div>
            <div className="grid gap-6 justify-center p-3">
                <PostList />
            </div>
        </section>
    );
}

export default Post;