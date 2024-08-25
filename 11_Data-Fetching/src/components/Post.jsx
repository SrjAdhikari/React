import React from "react";
import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";

// Component to display individual post information
const Post = ({ post }) => {
	// Retrieve deletePost function from the PostList context
	const { deletePost } = useContext(PostList);
	return (
		<div className="card post-card" style={{ width: "20rem" }}>
			<div className="card-body">
				<h5 className="card-title">
					{post.title}
					{/* Delete button to remove the post */}
					<span
						className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
						onClick={() => deletePost(post.id)}
					>
						<MdDelete />
					</span>
				</h5>
				<p className="card-text">{post.body}</p>
				{/* Display tags associated with the post */}
				{post.tags.map((tag) => (
					<span key={tag} className="badge text-bg-primary hashtag">
						{tag}
					</span>
				))}
				{/* Show the number of reactions the post has received */}
				<div className="alert alert-success reactions" role="alert">
					This post has been reacted by {post.reactions} people.
				</div>
			</div>
		</div>
	);
};

export default Post;
