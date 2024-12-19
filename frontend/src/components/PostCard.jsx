import React from "react";

const PostCard = ({ post }) => {
  return (
    <div className="bg-white border border-gray-300 shadow-md rounded-lg p-4 flex flex-col gap-4 w-full max-w-md">
      {/* Top Section */}
      <div className="flex items-center gap-4">
        <img
          src={post.image}
          alt="User"
          className="w-12 h-12 rounded-full object-cover border"
        />
        <h3 className="text-lg font-semibold">{post.name}</h3>
      </div>

      {/* Details */}
      <div className="text-gray-600 text-sm">
        <p>
          <strong>Date:</strong> {post.date}
        </p>
        <p>
          <strong>Destination:</strong> {post.destination}
        </p>
        <p>
          <strong>Description:</strong> {post.description}
        </p>
        <p>
          <strong>People Needed:</strong> {post.peopleNeeded}
        </p>
      </div>

      {/* Bottom Chat Button */}
      <button className="self-end bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
        Chat
      </button>
    </div>
  );
};

export default PostCard;
