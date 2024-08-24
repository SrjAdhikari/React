import { useContext } from "react";
import Post from "./Post";
import { PostList as PostData } from "../store/post-list-store";

// Component to display a list of posts
const PostList = () => {
	// Retrieve the current list of posts from the PostData context
	const { postList } = useContext(PostData);

	// Render each post in the postList using the Post component
	return (
		<>
			{/* 
				Map over the postList array and render a Post component for each post.
				Each Post component is provided with a unique key (post.id) and the post data.
			*/}
			{postList.map((post) => (
				<Post key={post.id} post={post} />
			))}
		</>
	);
};

export default PostList;
