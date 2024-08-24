import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import "./App.css";
import { useState } from "react";

function App() {
	// State to keep track of the currently selected tab (either "Home" or "Create Post")
	const [selectedTab, setSelectedTab] = useState("Home");

	return (
		<div className="app-container">
			<Sidebar
				// `selectedTab` prop: This is used to determine which tab is currently active in the Sidebar.
				selectedTab={selectedTab}
				// `setSelectedTab` prop: This function is used to update the `selectedTab` state in the parent component (App). when a tab is clicked.
				setSelectedTab={setSelectedTab}
			/>
			<div className="content">
				<Header />
				{/* 
					Conditional rendering based on the selected tab:
					- If "Home" is selected, the PostList component is shown
					- If any other tab is selected, the CreatePost component is shown 
				*/}
				{selectedTab === "Home" ? <PostList /> : <CreatePost />}
				<Footer />
			</div>
		</div>
	);
}

export default App;
