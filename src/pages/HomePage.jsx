import Loader from "../components/Loader"
import PostCard from "../components/PostCard"
import { usePosts } from "../context/PostContext"

// import Pagination from "../components/Pagination"


function HomePage() {
    const posts = usePosts()

    return (
        <>
            {/* <Pagination data={posts} /> */}

            {!posts.length && <Loader />}
            {posts.map((post) => (
                <PostCard key={post.articleId} data={post} />
            ))}
        </>
    )
}

export default HomePage