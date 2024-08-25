import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
	// Extract the addPost function from PostList context
	const { addPost } = useContext(PostList);

	// useRef hooks to reference form input elements
	const userIDElement = useRef();
	const postTitleElement = useRef();
	const postBodyElement = useRef();
	const reactionsElement = useRef();
	const tagsElement = useRef();

	// Handle form submission
	const handleSubmit = (event) => {
		event.preventDefault(); // Prevent the default form submission behavior

		// Get values from input fields
		const userID = userIDElement.current.value;
		const postTitle = postTitleElement.current.value;
		const postBody = postBodyElement.current.value;
		const reactions = reactionsElement.current.value;
		const tags = tagsElement.current.value.split(" "); // Split tags by spaces

		// Clear input fields after submission
		userIDElement.current.value = "";
		postTitleElement.current.value = "";
		postBodyElement.current.value = "";
		reactionsElement.current.value = "";
		tagsElement.current.value = "";

		// Call the addPost function to add the new post
		addPost(userID, postTitle, postBody, reactions, tags);
	};

	return (
		<form className="create-post" onSubmit={handleSubmit}>
			{/* User ID input */}
			<div className="mb-3">
				<label htmlFor="userID" className="form-label">
					Enter your user ID
				</label>
				<input
					type="text"
					ref={userIDElement}
					className="form-control"
					id="userID"
					placeholder="Your user ID"
				/>
			</div>

			{/* Post Title input */}
			<div className="mb-3">
				<label htmlFor="title" className="form-label">
					Post Title
				</label>
				<input
					type="text"
					ref={postTitleElement}
					className="form-control"
					id="title"
					placeholder="How are you feeling today..."
				/>
			</div>

			{/* Number of reactions input */}
			<div className="mb-3">
				<label htmlFor="reactions" className="form-label">
					Number of reactions
				</label>
				<input
					type="text"
					ref={reactionsElement}
					className="form-control"
					id="reactions"
					placeholder="How many people reacted to this post"
				/>
			</div>

			{/* Tags input */}
			<div className="mb-3">
				<label htmlFor="tags" className="form-label">
					Enter your hashtags here
				</label>
				<input
					type="text"
					ref={tagsElement}
					className="form-control"
					id="tags"
					placeholder="Please enter tags using space"
				/>
			</div>

			{/* Post Content input */}
			<div className="mb-3">
				<label htmlFor="body" className="form-label">
					Post Content
				</label>
				<textarea
					type="text"
					ref={postBodyElement}
					rows="4"
					className="form-control"
					id="body"
					placeholder="Tell us more about it"
				/>
			</div>

			{/* Submit button */}
			<button type="submit" className="btn btn-primary">
				Create Post
			</button>
		</form>
	);
};

export default CreatePost;
