// import React from "react";

const Profile = () => {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    bio: "Full Stack Developer | Tech Enthusiast | Lifelong Learner",
    profileImage:
      "https://via.placeholder.com/150", // Replace with your actual image URL
    location: "San Francisco, CA",
    joined: "January 2023",
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md">
        {/* Profile Header */}
        <div className="relative">
          <img
            src="https://via.placeholder.com/600x200" // Replace with a cover image
            alt="Cover"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <img
            src={user.profileImage}
            alt="Profile"
            className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full border-4 border-white"
          />
        </div>

        {/* Profile Body */}
        <div className="text-center mt-16 p-4">
          <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-gray-500 text-sm">{user.bio}</p>
          <p className="mt-2 text-gray-600">
            <i className="fas fa-envelope text-gray-400 mr-1"></i>
            {user.email}
          </p>
          <p className="text-gray-600 mt-1">
            <i className="fas fa-map-marker-alt text-gray-400 mr-1"></i>
            {user.location}
          </p>
          <p className="text-gray-600 mt-1">
            <i className="fas fa-calendar-alt text-gray-400 mr-1"></i>
            Joined {user.joined}
          </p>

          {/* Action Buttons */}
          <div className="mt-4 flex justify-center gap-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
              Edit Profile
            </button>
            <button className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition">
              Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
