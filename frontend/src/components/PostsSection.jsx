import React, { useState, useEffect } from "react";
import PostCard from "./PostCard";
import AddPostModal from "./AddPostModal";

const PostsSection = () => {
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Fetch Posts from Backend
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  // Add New Post
  const addPost = (newPost) => {
    setPosts([newPost, ...posts]); // Add new post at the top
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Posts</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          onClick={() => setShowModal(true)}
        >
          Add Post +
        </button>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.length > 0 ? (
          posts.map((post, index) => <PostCard key={index} post={post} />)
        ) : (
          <p className="text-gray-600 col-span-full">No posts available.</p>
        )}
      </div>

      {/* Add Post Modal */}
      {showModal && (
        <AddPostModal onClose={() => setShowModal(false)} onAddPost={addPost} />
      )}
    </div>
  );
};

export default PostsSection;
