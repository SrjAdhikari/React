import { createContext, useReducer } from "react";

// Create a context for managing the list of posts and related actions
export const PostList = createContext({
	postList: [], // Array to store the list of posts
	addPost: () => {}, // Function placeholder for adding a post
	deletePost: () => {}, // Function placeholder for deleting a post
});

// Reducer function to handle actions dispatched for modifying the post list
const postListReducer = (currentPostList, action) => {
	let newPostList = currentPostList;

	// Action to delete a post by filtering it out from the current list
	if (action.type === "DELETE_POST") {
		newPostList = currentPostList.filter(
			(post) => post.id !== action.payload.postId
		);
	}

	// Return the updated list of posts
	return newPostList;
};

// Provider component that supplies the post list and functions to the component tree
const PostListProvider = ({ children }) => {
	// Initialize the postList state and dispatch function using useReducer
	const [postList, dispatchPostList] = useReducer(
		postListReducer,
		DEFAULT_POST_LIST
	);

	// Function to add a post (currently not implemented)
	const addPost = () => {};

	// Function to delete a post by dispatching the DELETE_POST action
	const deletePost = (postId) => {
		dispatchPostList({
			type: "DELETE_POST",
			payload: {
				postId, // Pass the ID of the post to be deleted
			},
		});
	};

	// Provide the post list and action functions to the children components
	return (
		<PostList.Provider
			value={{
				postList: postList, // The current list of posts
				addPost: addPost, // Function to add a post
				deletePost: deletePost, // Function to delete a post
			}}
		>
			{children} // Render the children components
		</PostList.Provider>
	);
};

// Default initial list of posts to populate the state
const DEFAULT_POST_LIST = [
	{
		id: "1",
		title: "Going to Tokyo",
		body: "Hi Friends, I am going to Tokyo for my new job.",
		reactions: "5",
		userId: "user-123",
		tags: ["jobs", "tokyo", "newjob"],
	},
	{
		id: "2",
		title: "Finally get dream job",
		body: "Finally, get jobs at Amazon for Software Engineer.",
		reactions: "50",
		userId: "user-132",
		tags: ["amazon", "tokyo", "newjob", "dreamjob", "selected"],
	},
];

export default PostListProvider;
